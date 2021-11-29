import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Application from './components/Application';
import Character from './components/Character';
import Token from  './components/Token';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Application />
        <Character/>
        <Token resumeData={resumeData}/>
        <Roadmap />
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;