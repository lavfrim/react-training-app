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


    handlChange = (event) => {
        const name = event.target.name;
        console.log(name);

        switch (name) {
            case 'debt': console.log(name);
                break;
            case 'payment': console.log(name);
                break;
            case 'month': console.log(name);
                break;
            default: console.log('non');
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
                            debt
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
                            debt
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