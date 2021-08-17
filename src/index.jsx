import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalProvider from './providers/GlobalProvider/GlobalProvider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
