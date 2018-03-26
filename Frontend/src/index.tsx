import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import * as RoutesModule from './routes';

import { AppContainer } from 'react-hot-loader';
import { withMaterialUI } from './components/shared/MUI/withMUI';

const Routes = RoutesModule.routes;
const AppWithMaterial = withMaterialUI(AppContainer);

ReactDOM.render(
  <AppWithMaterial>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppWithMaterial>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
