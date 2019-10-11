import React, { Component } from 'react';
import './App.scss';

import Image from "./Components/Image"


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
        <p>Image</p>
        <Image imageShadow = {this.state.imageShadow} />
      </>
    )
  }
}
