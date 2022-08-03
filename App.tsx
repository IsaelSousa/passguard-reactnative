import React from 'react';
import {PopupProvider} from './src/context/MessagePopupContext';
import {Router} from './src/routes';

const App = () => {
  return (
    <PopupProvider>
      <Router />
    </PopupProvider>
  );
};

export default App;
