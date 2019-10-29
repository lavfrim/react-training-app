import React, { Component } from 'react';

import './monthlyPayments.scss';

const blockName='monthlyPayments';

export default class MonthlyPayments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentMonth: []
        }

        const months = [
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
        ];
        const { payment, month, setStateValue } = this.props;
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
        console.log(`monthsArray`)
        console.log(monthsArray)
        this.state.paymentMonth = monthsArray;
        // setStateValue('paymentMonth', monthsArray)
    }

    handlChange = (event) => {
        const { paymentMonth, setStateValue } = this.props;
        const newPaymentMonths = paymentMonth.slice();
        const input = event.target;
        const id = input.id;
        const value = Number(input.value);
        const previousValue = paymentMonth[id].value;
        newPaymentMonths[id].value = value;
        let  differensOfValue = previousValue - value;
        let lastIndex = newPaymentMonths.length-1;
        let correctiveValue = newPaymentMonths[lastIndex].value + differensOfValue;
        function setCorrectiveValue() {
            if (correctiveValue < 0) {
                newPaymentMonths[lastIndex].value = 0;
                differensOfValue = correctiveValue;
                lastIndex -= 1;
                correctiveValue = newPaymentMonths[lastIndex].value + differensOfValue;
                setCorrectiveValue();
            } else {
                newPaymentMonths[lastIndex].value = correctiveValue;
            }
        }
        setCorrectiveValue()
        
        setStateValue('paymentMonth', newPaymentMonths)
    }

    render() {
        const { paymentMonth } = this.props;
        return(
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>Monthly payments</legend>

                    <div>
                        {paymentMonth && paymentMonth.map((monthInfo, index) => {
                            return(
                                // key={`${index}-${monthInfo.month}-${monthInfo.value}`} broken focus
                                <div className={`${blockName}__month`} >
                                    <p className={`${blockName}__month-name`}>
                                        <span className={`${blockName}__month-number`}>{index + 1}</span>
                                        {monthInfo.month}
                                    </p>
                                    <input 
                                        id={`${index}`}
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