import React, { Component } from 'react';

export default function HOC(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }

        doScrollingElement = (popoverDOMElement) => {
            popoverDOMElement.scrollIntoView({block: "start", behavior: "smooth"});
        }

        render() {
            console.log(`HOC`);
            return (
                <WrappedComponent
                {...this.props}
                doScrollingElement={this.doScrollingElement}
                />
            )
        }
    }

}