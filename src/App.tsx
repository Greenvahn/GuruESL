import React from 'react';
import { HashRouter  } from 'react-router-dom';
import Baseroutes from './components/routes';
import './App.css';

function App() {
  return (
    <>
      <HashRouter >
        <Baseroutes />
      </HashRouter >
    </>
  );
}

export default App;
