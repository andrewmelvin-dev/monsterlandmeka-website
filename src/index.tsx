import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from 'history';
import App from './App';

import './index.css';

const history = createBrowserHistory();

const root = document.getElementById('root') as HTMLElement | null;
if (root) {
  // Set up the browser history with the updated location (without the # sign)
  const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }

  // Render the app
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
