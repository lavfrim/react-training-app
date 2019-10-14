import React, { Component } from 'react';

import './liftingStateUp.scss';

import LiftMeUp from '../LiftMeUp';

const blockName = 'liftingStateUp';

export default class LiftingStateUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liftingStateUp: 42,
            constant: 19,
        }
    }

    handlChange = (event) => {
        const value = event.target.value;
        this.setState({
            liftingStateUp: value,
        });
    }

    additionalHandlChange = (event) => {
        const value = Number(event.target.value);
        const mainValue = value + this.state.constant;
        this.setState({
            liftingStateUp: mainValue,
        })
    }

    render() {
        const { liftingStateUp, constant } = this.state;

        return (
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>liftingStateUp</legend>
                    <form>
                        <input 
                            type="number" 
                            value={liftingStateUp}
                            onChange={this.handlChange}
                        />
                    </form>
                </fieldset>
                <LiftMeUp 
                    liftingStateUp={liftingStateUp}
                    constant={constant}
                    handlChange={this.additionalHandlChange}
                />
            </div>
        )
    }
}