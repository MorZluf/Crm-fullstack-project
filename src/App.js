import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Clients from './components/clients-components/Clients';
import Actions from './components/actions-components/Actions';
import Analytics from './components/Analytics';


class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

 


  render() {
    return (
      <Router>
      <div id="app">
      <Navbar />
      <Route path="/clients" exact render={() => <Clients/>} />
      
      <Route path="/actions" exact render={() => <Actions />} />
      <Route path="/analytics" exact render={() => <Analytics />} />
      </div>
      </Router>

    )
  }
}

export default App;
