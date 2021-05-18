import ReactDOM from 'react-dom';
import App from './App';

import { PlaceProvider } from './providers/place'


ReactDOM.render(
  <PlaceProvider>
    <App />
  </PlaceProvider>,
  document.getElementById('root')
);

