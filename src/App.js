import React, { Component } from 'react';
import Perent from './components/Perent';
import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appInfo: 'this is state info form App',
    };
  }

  render() {
    return (
      <>
        <div>
          <h1>{this.state.appInfo}</h1>
          <Perent />
        </div>
      </>
    )
  }
}
