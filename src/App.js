import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route,Switch } from 'react-router-dom';
import Cars from './Cars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li><Link className="App-link" to="/">Home</Link></li>
              <li><Link className="App-link" to="/cars">Cars</Link></li>
            </ul> 
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cars" component={Cars}/>
        </Switch>
      </div>
    );
  }
}

const Home = ({match}) => <div>Home</div>;

export default App;
