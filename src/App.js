import './App.css';
import './index.css';
import './reset.css';

import { Button, Navbar } from './components';

import React from 'react';

const App = () => (
  <div>
    <Navbar />
    <Button text="1123" inactive />
  </div>
);

export default App;
