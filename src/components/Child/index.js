import React, { PureComponent } from 'react';
import SubChild from '../SubChild';

export default class Child extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            childInfo: 'this is state info from Child',
        }
    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                <h3>{this.state.childInfo}</h3>
                <SubChild />
            </div>
        )
    }
}