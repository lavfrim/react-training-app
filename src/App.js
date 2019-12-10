import React, { Component } from 'react';
import './App.scss';

import CreditInitialData from './Componenst/CreditInitialData';
import MonthlyPayments from './Componenst/MonthlyPayments';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      debt: null,
      payment: null,
      month: null,
      paymentMonth: [],
    };
  }

  setStateValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  render() {   
    const { debt, payment, month, paymentMonth, isInitialDataChange } = this.state;
    // console.log(`debt `, debt);
    // console.log(`payment `, payment);
    // console.log(`month `, month);
    // console.log(`paymentMonth `, paymentMonth);

    return (
      <>
        <CreditInitialData
          debt={debt}
          payment={payment}
          month={month}
          setStateValue={this.setStateValue}
        />
        <MonthlyPayments
          debt={debt}
          payment={payment}
          month={month}
          paymentMonth={paymentMonth}
          setStateValue={this.setStateValue}
          isInitialDataChange={isInitialDataChange}
        />
      </>
    )
  }
}
