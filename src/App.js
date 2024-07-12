import './App.css';
import './index.css';
import './reset.css';

import { Button, Navbar } from './components';

import React, {useState} from 'react';

function App() {
  const show = {
    1: "Main",
    2: "Join",
    3: "Create",
  }
  return (
  <div>
    <Navbar />
    <Button text="1123" inactive />
  </div>
  )
};

export default App;
