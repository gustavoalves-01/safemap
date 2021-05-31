import ReactDOM from 'react-dom';
import App from './App';

import { PlaceProvider } from './providers/place'
import { UserProvider } from './providers/user'


ReactDOM.render(
  <UserProvider>
    <PlaceProvider>
      <App />
    </PlaceProvider>
  </UserProvider>,
  document.getElementById('root')
);

