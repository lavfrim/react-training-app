import React, { Component } from 'react';

import './creditInitialData.scss';

const blockName = 'creditInitialData';

export default class CreditInitialData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            debt: null,
            payment: null,
            month: null,
        }
    }
    
    setMonth = (debt, payment) => {
        if (payment > 0) {
            this.setState({
                month: Math.ceil(debt / payment),
            })
        } else {
            console.log(`invalid payment value`);
        }
    };

    setPayment = (debt, month) => {
        this.setState({
            payment: Math.ceil(debt / month * 100) / 100,
        })
    }

    handlChange = (event) => {
        const name = event.target.name;
        const value = Number(event.target.value);

        if (value > 0) {
            this.setState({
                [name]: value,
            });
    
            switch (name) {
                case 'debt': this.setMonth(value, this.state.payment); console.log(`debt`);
                    break;
                case 'payment': this.setMonth(this.state.debt, value); console.log(`payment`);
                    break;
                case 'month': this.setPayment(this.state.debt, value); console.log(`month`);
                    break;
                default: console.log('unknown event variant');
                    break;
            }
        } else {
            alert('Enter a positive value ')
        }
    }

    render() {
        const { debt, payment, month } = this.state;
        console.log(debt, payment, month);

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