import React, { Component } from 'react';

import './liftMeUp.scss';

const blockName = 'liftMeUp';

export default class LiftMeUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liftMeUp: 23,
        }
    }

    magicNumberChanger = (number) => {
        return (+number - 19)
    }

    render() {
        const { liftMeUp } = this.state;
        const { 
            liftingStateUp,
            handlChange,
        }

        return (
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>liftMeUp</legend>
                    <form>
                        <input 
                            type="number" 
                            value={liftingStateUp}
                            onChange={handlChange}
                        />
                    </form>
                </fieldset>
            </div>
        )
    }
}