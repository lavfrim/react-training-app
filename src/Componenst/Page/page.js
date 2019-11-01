import React, { Component } from 'react';
import Button from '../Button';
import { HOC } from '../HOC';

import './page.scss';

// const WrappedButton = HOC(Button);

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.blockName = 'page';
    }

    render() {
        return (
            <div className={this.blockName}>
                {/* <WrappedButton /> */}
                <Button />
            </div>
        )
    }
}