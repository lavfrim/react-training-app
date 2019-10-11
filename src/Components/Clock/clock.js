import React, { Component } from 'react';

import './clock.scss';

const blockName = 'clock';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        }

        
    }

    tick() {
        this.setState({
            date: new Date(),
        }) 
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className={`${blockName}__container`}>
                <h1>Frim Clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}