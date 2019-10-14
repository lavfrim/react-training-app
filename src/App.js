import React, { Component } from 'react';
import './App.scss';

import LiftingStateUp from './Componenst/LiftingStateUp';

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
        <LiftingStateUp />
      </>
    )
  }
}
