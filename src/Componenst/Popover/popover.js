import React, { Component } from 'react';

import './popover.scss';

export default class Popover extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        this.blockName = 'popover';
        this.popoverRef = React.createRef();
    }

    getPopoverRef() {
        return this.popoverRef.current
    }

    componentWillUpdate() {
        console.log(this.getPopoverRef())
    }

    componentDidMount() {
        console.log(this.getPopoverRef())
    }

    render() {
        return (
           <div
            className={this.blockName}
            ref={this.popoverRef}
           >
               <p>THE</p>
               popover
           </div>
        )
    }
}