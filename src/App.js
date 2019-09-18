import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyWork from './components/MyWork'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
      <MySkills />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
