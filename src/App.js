import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import { BackToTop } from './components';
import { HomePage, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';

function App() {

  return (
    <div className="app">
      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects/" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      <BackToTop />
      <ChangeTheme />
    </div>
  );
}

export default App;
