import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import { Provider as ReduxProvider } from 'react-redux';
import App from 'app/App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
