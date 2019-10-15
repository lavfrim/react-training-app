import React, { Component } from 'react';

import './creditInitialData.scss';

const blockName = 'creditInitialData';

export default class CreditInitialData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            debt: 0,
            payment: 0,
            month: 0,
        }
    }
    
    setMonth = () => {
        const { debt, payment } = this.state;

        if (payment > 0) {
            this.setState({
                month: Math.ceil(debt / payment),
            })
        } else {
            console.log(`invalid payment value`);
        }
    };

    setPayment = () => {
        const { debt, month } = this.state; 

        this.setState({
            payment: debt / month,
        })
    }

    qqqq = (name, value) => {
        this.setState({
            [name]: value,
        });
    }

    handlChange = (event) => {
        console.log(`handlChange`);
        const name = event.target.name;
        const value = Number(event.target.value);

        console.log(this.state[name]);

        this.qqqq(name, value);

        console.log(this.state[name]);

        switch (name) {
            case 'debt': this.setMonth(); console.log(`debt`);
                break;
            case 'payment': this.setMonth(); console.log(`payment`);
                break;
            case 'month': this.setPayment(); console.log(`month`);
                break;
            default: console.log('unknown event variant');
                break;
        }
    }

    render() {
        const { debt, payment, month } = this.state;

        return (
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>
                        creditInitialData
                    </legend>

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
                    
                </fieldset>
            </div>
        )
    }
}