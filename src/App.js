import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
