import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Baseroutes from './components/routes';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/GuruESL">
        <Baseroutes />
      </BrowserRouter>
    </>
  );
}

export default App;
