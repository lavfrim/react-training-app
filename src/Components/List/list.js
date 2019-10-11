import React, { Component } from 'react';
import sn from 'classnames'

import './list.scss';

const blockName = 'list';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wordsArray: [
                'I',
                'want',
                'to be',
                'a good',
                'proggrammer'
            ]
        }
    }

    render() {
        const { wordsArray } = this.state;

        return (
            <ul className={sn(blockName)}>
                {wordsArray.map((word, index) => <li key={`${index}-${word}`}>{word}</li>)}
            </ul>
        )
    }
}