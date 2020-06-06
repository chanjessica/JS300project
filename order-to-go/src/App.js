// import firebase from 'firebase';
import React from 'react';
// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './NotFound';
import Menu from './menu';
import Home from './home';
import Login from './login';
import Logout from './logout';

// const firestore = firebase.firestore();
// firestore
//   .collection('foodToGo')
//   .onSnapshot(
//     snapshot => console.log(
//       snapshot.docs.map(doc => doc.data())
//     ),
//     err => console.log(err)
//   );

const Links = () => (
  <div className="nav">
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/menu">Menu</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"> <Links />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/menu" component={Menu} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;

