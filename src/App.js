import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Calendar} from 'primereact';
import 'primereact/resources/primeng.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';


class App extends Component {

constructor() {
    super();
    this.state = {};
    this.onChangeBasic = this.onChangeBasic.bind(this);
}

onChangeBasic(e) {
    this.setState({ date1: e.value });
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calendar tabindex="0" onChange={this.onChangeBasic}></Calendar>
      </div>
      
    );
  }
}

export default App;
