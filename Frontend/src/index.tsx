import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { routes as Routes } from './routes';
import './index.css';
import { AppContainer } from 'react-hot-loader';
import { withMaterialUI } from './components/shared/MUI/withMUI';
import App from './App';
const AppWithMaterial = withMaterialUI(AppContainer);

ReactDOM.render(
  <AppWithMaterial>
    <App />
  </AppWithMaterial>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
