import React, { Component } from 'react';

import './liftMeUp.scss';

const blockName = 'liftMeUp';

export default class LiftMeUp extends Component {
    constructor(props) {
        super(props);
    }

    magicNumberChanger = (number) => {
        return (Number(number) - this.props.constant)
    }

    render() {
        const { 
            liftingStateUp,
            constant,
            handlChange,
        } = this.props;

        return (
            <div className={`${blockName}`}>
                <fieldset>
                    <legend>liftMeUp</legend>
                    <form>
                        <input 
                            type="number" 
                            value={this.magicNumberChanger(liftingStateUp)}
                            onChange={handlChange}
                        />
                    </form>
                </fieldset>
            </div>
        )
    }
}