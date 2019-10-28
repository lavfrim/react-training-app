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
            ],
            now: new Date(),
            debt: 5000,
            payment: 250,
            month: 20,
        }

        this.paymentMonth = [];
    }

    onChange = (event) => {
        console.log(event.targ)
        console.log(`onChange`);
    }

    render() {
        const { months, now, debt, payment, month } = this.state;

        let currentMonth = now.getMonth();
        console.log(month);

        let m = 0;
        while (m < month && m < 1200) {
            this.paymentMonth.push({
                month: months[currentMonth].month,
                value: payment,
            });
            currentMonth += 1;
            if (currentMonth >= months.length) {
                currentMonth = 0;
            }
            m += 1;
        }

        console.log(this.paymentMonth);

        return(
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>Monthly payments</legend>

                    <div>
                        {this.paymentMonth.map((monthInfo, index) => {
                            return(
                                <div className={`${blockName}__month`} key={`${index}-${monthInfo.month}-${monthInfo.value}`}>
                                    <p className={`${blockName}__month-name`}>{monthInfo.month}</p>
                                    <input 
                                        type="number" 
                                        placeholder="payment" 
                                         
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