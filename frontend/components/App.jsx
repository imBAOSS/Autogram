import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <h1>Dappergram</h1>
    {children}
  </div>
);

export default App;