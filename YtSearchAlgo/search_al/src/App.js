import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Upload from './Components/Upload';
import logo from './logo.svg';
// import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Upload' element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
