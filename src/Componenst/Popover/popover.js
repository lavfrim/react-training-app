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

    getPopoverAndParentRef() {
        function getPapent(elemment) {
           return elemment.parentNode.parentNode
        }

        const popover = this.popoverRef.current;
        const popoverParent = getPapent(popover);

        return {popover, popoverParent}
    }

    componentWillUpdate() {
        const { scrollElementToVisible } = this.props;
        const { popover, popoverParent } = this.getPopoverAndParentRef()
        scrollElementToVisible(popover, popoverParent)
    }

    componentDidMount() {
        const { scrollElementToVisible } = this.props;
        const { popover, popoverParent } = this.getPopoverAndParentRef()
        scrollElementToVisible(popover, popoverParent)
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