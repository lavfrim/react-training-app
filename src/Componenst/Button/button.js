import React, { Component } from 'react';
import Popover from '../Popover/popover';

import './button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPopover: false,
        }
        this.blockName = 'button';
    }

    handleClick = () => {
        this.setState({
            isShowPopover: !this.state.isShowPopover,
        })
    }

    render() {
        const { scrollElementToVisible } = this.props;
        return (
            <>
                <button 
                    className={this.blockName}
                    onClick={this.handleClick}
                >
                    Click
                </button>
                {this.state.isShowPopover && 
                    <div>
                        <Popover scrollElementToVisible={scrollElementToVisible} />
                    </div>
                }
            </>
        )
    }
}