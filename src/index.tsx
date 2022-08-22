import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import { store } from 'store/store';
import { Provider } from 'react-redux';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
