import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Navigation from './Navigation';

import { BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  return(
    <>
    <Router>
      <Navigation/>
      <Route path='/login' component={Login}/>
      <Route path='/sign-up' component={SignUp}/>
    </Router>
    
    </>
  );
}

export default App;
