import React,{useEffect} from 'react';
import './App.css';
// import firebase from './components/firebase';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Foot from './components/Foot';

function App() {
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/login">
                <Home/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signUp">
                <Home />
              </Route>
            </Switch>
          </div>
          <Foot />
          {/* <SignIn />
          <SignUp />
          <AuthDetails /> */}
        </div>
      </Router>
    );
  }
  

export default App;
