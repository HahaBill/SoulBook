import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Router exact path='/' component={Home}/>
      <Router exact path='/login' component={Login}/>
      <Router exact path='/register' component={Register}/>
    </Router>
  );
}

export default App;
