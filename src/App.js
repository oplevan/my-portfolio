import React from 'react';
import AOS from 'aos';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './App.css';
import 'aos/dist/aos.css';

// Pages
import Home from './components';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Error from './components/404';
import ProjectDescription from './components/ProjectDescription';

function App() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out-back',
    delay: 0,
  });
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/experience' component={Experience} />
        <Route path='/contact' component={Contact} />
        <Route path='/project/:id' children={<ProjectDescription />} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
