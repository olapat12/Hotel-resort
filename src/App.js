import React from 'react';
import './App.css'
import Home from './pages/Home'
import Singleroom from './pages/Singleroom'
import Rooms from './pages/Rooms'
import Error from './pages/errorpage'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App"> 
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/rooms:slug' component={Singleroom}/>
      <Route component={Error} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
