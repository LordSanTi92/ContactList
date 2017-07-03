import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import Logic from './Logic'
class Home extends React.Component{
  render(){
   return <h1>Hello World</h1>
 }
}
class App extends React.Component {
  render() {
    return <div className="App">
      <BrowserRouter>
        <div>
        <Route path="/home" component={Home}></Route>
        <Route path="/contacts" component={Home,Logic}></Route>
            <Link to="/home">Home</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
      </BrowserRouter>
    </div>
  }
}

export default App
