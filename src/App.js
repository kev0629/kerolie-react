import React from 'react';
import Clients from './Component/Clients'
import Facturaton from './Component/Facturation'
import Prestation from './Component/Prestation'
import Config from './Component/Config'
import Navigation from './Component/Navigation'
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Route path="/" exact component={Facturaton}/>
        <Route path="/Prestation" exact component={Prestation}/>
        <Route path="/Clients" exact component={Clients}/>
        <Route path="/Config" exact component={Config}/>
      </Router>
    </div>
  );
}

export default App;
