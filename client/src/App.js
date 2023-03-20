import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import { AuthProvider } from './context/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Container>
            <MenuBar/>    
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/register' element={<Register/>}/>
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
