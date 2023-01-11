import React from 'react';
import { ReactDOM } from 'react';

import App from './App';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);