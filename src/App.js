import React, { Component } from 'react';

import './App.scss';

import Click from './Components/Click'

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
        <Click />
      </>
    )
  }
}
