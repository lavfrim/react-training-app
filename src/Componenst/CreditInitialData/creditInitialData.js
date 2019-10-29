import React, { Component } from 'react';

import './creditInitialData.scss';

const blockName = 'creditInitialData';

export default class CreditInitialData extends Component {
        
    setMonth = (debt, payment) => {
        const { setStateValue } = this.props;
        if (payment > 0) {
            setStateValue('month', Math.ceil(debt / payment))
        } else {
            console.log(`invalid payment value`);
        }
    };

    setPayment = (debt, month) => {
        const { setStateValue } = this.props;
        setStateValue('payment', Math.ceil(debt / month * 100) / 100)
    }

    handlChange = (event) => {
        const { debt, payment, setStateValue } = this.props
        const name = event.target.name;
        const value = Number(event.target.value);

        if (value > 0) {
            setStateValue(`${name}`, value);
    
            switch (name) {
                case 'debt': this.setMonth(value, payment);
                    break;
                case 'payment': this.setMonth(debt, value);
                    break;
                case 'month': this.setPayment(debt, value);
                    break;
                default: console.log('unknown event variant');
                    break;
            }
        } else {
            alert('Enter a positive value ')
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