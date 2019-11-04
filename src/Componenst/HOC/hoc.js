import React, { Component } from 'react';

export default function scrollToVisible(WrappedComponent, headerHeight, footerHeight) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }

        scrollElementToVisible = (popoverDOMElement, popoverParentDOMElement) => {
            const { headerHeight, footerHeight } = this.props;
            popoverDOMElement.scrollIntoView({block: "start", behavior: "smooth"});
            if (headerHeight) {
                console.log(`headerHeight`)
            }
        }

        render() {
            return (
                <WrappedComponent
                {...this.props}
                scrollElementToVisible={this.scrollElementToVisible}
                />
            )
        }
    }
}