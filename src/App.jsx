import { useState } from 'react';
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {

  return (
    <div>
        <Header />
        <Home />
        <About />
    </div>
  )
}

export default App
