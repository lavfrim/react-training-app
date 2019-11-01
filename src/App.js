import React, { Component } from 'react';
import Page from './Componenst/Page';

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
        <Page />
      </>
    )
  }
}
