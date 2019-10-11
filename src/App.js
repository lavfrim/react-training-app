import React, { Component } from 'react';
import './App.scss';

import List from './Components/List';

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
        <List />
      </>
    )
  }
}
