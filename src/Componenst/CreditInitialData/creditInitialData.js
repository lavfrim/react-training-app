import React, { Component } from 'react';

import './creditInitialData.scss';

const blockName = 'creditInitialData';

export default class CreditInitialData extends Component {
    constructor(props) {
    super(props);

        this.state = {
            months: [
            {month: 'January', value: null},
            {month: 'February', value: null},
            {month: 'March', value: null},
            {month: 'April', value: null},
            {month: 'May', value: null},
            {month: 'June', value: null},
            {month: 'July', value: null},
            {month: 'August', value: null},
            {month: 'September', value: null},
            {month: 'October', value: null},
            {month: 'November', value: null},
            {month: 'December', value: null},
            ],
        };
    }

    setPaymentMonth = (payment, month) => {
        const { setStateValue } = this.props;
        const { months } = this.state;
        
        const monthsArray = [];
        const now = new Date();
        let currentMonth = now.getMonth();
        let m = 0;
        while (m < month && m < 1200) {
            monthsArray.push({
                month: months[currentMonth].month,
                value: payment,
            });
            currentMonth += 1;
            if (currentMonth >= months.length) {
                currentMonth = 0;
            }
            m += 1;
        }
        
        setStateValue('paymentMonth', monthsArray);
    }
        
    setMonth = (debt, payment) => {
        const { setStateValue } = this.props;
        if (payment > 0 && debt > 0) {
            const month = Math.ceil(debt / payment);
            setStateValue('month', month);
            this.setPaymentMonth(payment, month);
        } else {
            window.console.log(`invalid payment or debt value`);
        }
    };

    setPayment = (debt, month) => {
        const { setStateValue } = this.props;
        if (debt > 0 && month > 0) {
            const payment = Math.ceil(debt / month * 100) / 100;
            setStateValue('payment', payment);
            this.setPaymentMonth(payment, month);
        } else {
            window.console.log(`invalid debt or payment value`);
        }
    }

    handlChange = (event) => {
        const { debt, payment, month, setStateValue } = this.props
        const name = event.target.name;
        const value = Number(event.target.value);

        if (value > 0) {
            setStateValue(`${name}`, value);
    
            switch (name) {
                case 'debt': if (payment > 0 && month === 0) {
                                this.setMonth(value, payment); 
                            } else if (month > 0 && payment === 0) {
                                this.setPayment(value, month);
                            } else if (payment > 0 && month > 0) {
                                this.setPayment(value, month);
                            }
                    break;
                case 'payment': this.setMonth(debt, value); 
                    break;
                case 'month': this.setPayment(debt, value);
                    break;
                default: window.console.log('unknown event variant');
                    break;
            }
        } else {
            alert('Pls, enter a positive number')
        }
    }

    render() {
        const { debt, payment, month } = this.props;

        return (
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>
                        creditInitialData
                    </legend>

                    <div className={`${blockName}__date-container`}>
                        <fieldset>
                            <legend>
                                debt
                            </legend>
                            <input 
                                type="number" 
                                placeholder="debt" 
                                name="debt" 
                                value={debt} 
                                onChange={this.handlChange} 
                            />
                        </fieldset>
                        
                        <fieldset>
                            <legend>
                                payment
                            </legend>
                            <input 
                                type="number" 
                                placeholder="payment" 
                                name="payment" value={payment}
                                onChange={this.handlChange} 
                            />
                        </fieldset>

                        <fieldset>
                            <legend>
                                month
                            </legend>
                            <input 
                                type="number" 
                                placeholder="month" 
                                name="month" value={month} 
                                onChange={this.handlChange} 
                            />
                        </fieldset>
                    </div>
                   
                </fieldset>
            </div>
        )
    }
}