import React, { Component } from 'react';
import sn from 'classnames';

import './click.scss';

const blockName = 'click';

export default class Click extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonName: `press it`,
            message: ``,
        }
    }

    componentDidMount() {
        console.log(`componentDidMount`);
    }

    componentWillUnmount() {
        
    }

    render() {
        const { buttonName, message } = this.state; 

        const handleClick = (clickEvent) => {
            console.log(clickEvent);

            this.setState({
                message: `click`,
            })

            setTimeout(() => {
                this.setState({
                    message: ``,
                }) 
            }, 200)
        }

        return (
            <div className={`${blockName}__container`}>
                <p className={sn(`${blockName}__message`, `${blockName}__message-content`)}>
                    {message ? message : ``}
                </p>
                <button  
                    className={`${blockName}__button`}
                    onClick={handleClick}
                >
                    <span className={`${blockName}__button-content`}>{buttonName}</span>
                </button>
            </div>
        )
    }
}