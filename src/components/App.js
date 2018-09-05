import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import ML from './ML'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Machine Learning Points Classifier</h1>
        </header>
        <ML />
      </div>
    )
  }
}

export default App
