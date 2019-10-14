import React, { Component } from 'react';

import './liftingStateUp.scss';

import LiftMeUp from '../LiftMeUp';

const blockName = 'liftingStateUp';

export default class LiftingStateUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liftingStateUp: 42,
        }
    }

    handlChange = (event) => {
        const value = event.target.value;
        this.setState({
            liftingStateUp: value,
        });
    }

    render() {
        const { liftingStateUp } = this.state;

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
                    handlChange={this.handlChange}
                />
            </div>
        )
    }
}