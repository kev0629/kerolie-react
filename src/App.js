import React from 'react';
import Clients from './Component/Clients'
import Facturaton from './Component/Facturation'
import Prestation from './Component/Prestation'
import Config from './Component/Config'
import Navigation from './Component/Navigation'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./Component/assets/css/style.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact  component={Facturaton}/>
          <Route path="/Prestation"  component={Prestation}/>
          <Route path="/Clients"  component={Clients}/>
          <Route path="/Config"  component={Config}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
