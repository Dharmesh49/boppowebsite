import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotfoundPages from './components/pages/NotfoundPages';
import AddUser from './components/users/AddUser';
import UpdateUser from './components/users/UpdateUser';
import Users from './components/users/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exactpath="/users/:id" component={Users} />
          <Route exact path="/users/update/:id" component={UpdateUser} />
          <Route exact path="/NotfoundPages" component={NotfoundPages} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
