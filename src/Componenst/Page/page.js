import React, { Component } from 'react';
import Button from '../Button';
import scrollToVisible from '../HOC';

import './page.scss';

const headerHeight = 50;
const footerHeight = 50;

const WrappedButton = scrollToVisible(Button, headerHeight, footerHeight);

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
                <WrappedButton
                headerHeight={headerHeight}
                footerHeight={footerHeight}
                />
            </div>
        )
    }
}