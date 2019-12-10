import React, { PureComponent } from 'react';

import './monthlyPayments.scss';

const blockName='monthlyPayments';


export default class MonthlyPayments extends PureComponent {
    handlChange = (event) => {
        const { setStateValue, paymentMonth } = this.props;
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
        
        setStateValue('paymentMonth', newPaymentMonths);
    }

    render() {
        const { paymentMonth } = this.props;

        return(
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>Monthly payments</legend>

                    <ul>
                        {paymentMonth && paymentMonth.map((monthInfo, index) => {
                            return(
                                // key={`${index}-${monthInfo.month}-${monthInfo.value}`} broken focus
                                <li key={`${index}-${monthInfo.month}`} className={`${blockName}__month`} >
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
                                </li>
                            )
                        })}
                    </ul>
                </fieldset>
            </div>
        )
    }
}