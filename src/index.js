import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
// import { LoadingProvider } from './hooks/LoadingProvider';
import './index.css';

render(
  // <LoadingProvider>
  <App />,
  // </LoadingProvider>,
  document.getElementById('root')
);
