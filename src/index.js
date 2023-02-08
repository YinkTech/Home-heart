import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import SwitchRoutes from './containers/SwitchRoutes';
import store from './redux/store/index';
import './styles/index.css'
import './styles/navbar.css'
import './styles/styles.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <SwitchRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
