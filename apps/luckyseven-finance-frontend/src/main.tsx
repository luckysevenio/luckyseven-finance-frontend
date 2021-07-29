import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css/animate.min.css'
import App from './app/app';
import { AppProvider } from './store';


ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);
