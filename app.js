const express = require('express');
const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;
const renderToString = require('react-dom/server').renderToString;
const serialize = require('serialize-javascript');

const App = require('./ui').App;

const app = express();

const apiRouter = require('./api').apiRouter;

const renderFullPage = (html, preloadedState) => {
  return `<!doctype html>
           <html>
           <title> SW app</title>
           <body>
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE = ${serialize(preloadedState)}
            </script>
            <script src="/ui/static/bundle.js"></script>
           </body>
           </html>`
}

const handleRender = (req, res) => {
  const store = createStore(() => {});
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}

app.get('/', handleRender);
app.use('/api', apiRouter);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

