import React, { Component } from 'react';
import './App.scss';

import CreditInitialData from './Componenst/CreditInitialData';

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
        <CreditInitialData />
      </>
    )
  }
}
