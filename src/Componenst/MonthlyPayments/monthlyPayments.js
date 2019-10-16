import React, { Component } from 'react';

import './monthlyPayments.scss';

const blockName='monthlyPayments';

export default class MonthlyPayments extends Component {
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
            ]
        }
    }

    onChange = () => {
        console.log(`onChange`);
    }

    render() {
        const { months } = this.state;

        return(
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>Monthly payments</legend>

                    <div>
                        {months.map((monthInfo, index) => {
                            return(
                                <div className={`${blockName}__month`}>
                                    <p className={`${blockName}__month-name`}>{monthInfo.month}</p>
                                    <input 
                                        type="number" 
                                        placeholder="payment" 
                                        key={`${index}-${monthInfo.month}-${monthInfo.value}`} 
                                        value={monthInfo.value}
                                        onChange={this.handlChange} 
                                    />
                                </div>
                            )
                        })}
                    </div>
                </fieldset>
            </div>
        )
    }
}