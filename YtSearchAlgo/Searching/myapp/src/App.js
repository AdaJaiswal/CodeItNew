import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

import './App.css';
import Home from './Components/Home';
import Upload from './Components/Upload';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
