import React, { Component } from 'react';
import './App.scss';

import Forms from './Componenst/Forms';


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
        <Forms />
      </>
    )
  }
}
