import Navbar from './components/navbar'
import Home from './components/home'
import Batch from './components/batch'
import Contact from './components/contact'
import Signup from './components/Signup'
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/batch">
            <Batch/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          </Switch>
        </Router>
    </>
  )
}

export default App;
