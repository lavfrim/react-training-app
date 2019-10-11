import React, { Component } from 'react';
import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageShadow: 'big',
    };
  }

  render() {
    return (
      <>
        <h1>Hello! This is master.</h1>
      </>
    )
  }
}
