import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import './App.css'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyWork from './components/MyWork'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
      <MySkills />
      <MyWork />
    </div>
  );
}

export default App;
