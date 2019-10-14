import React, { Component } from 'react';

import './forms.scss';

const blockName = 'forms';

export default class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueOnChange: '',
            valueOnSubmit: '',
            selectArray: [
                'love',
                'peace',
                'friendship'
            ]
        }
    }

    handleSubmit = (event) => {
        const value = this.state.valueOnChange;
        this.setState({
            valueOnSubmit: value,
        })
        // нужно чтобы не обновлялась страница и все не сбрасывалось
        event.preventDefault();
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({
            valueOnChange: value,
        })
    }
  
    render() {
        const { 
            valueOnChange,
            valueOnSubmit,
            selectArray,
        } = this.state;

        return (
            <div className={blockName}>
                <form 
                    className={`${blockName}__content`}
                    onSubmit={this.handleSubmit}
                >
                    <p>Forms onChange: {valueOnChange} </p>
                    <p>Forms onSubmit: {valueOnSubmit} </p>
                    <label>
                        the textarea: 
                        <textarea
                            placeholder='type there'
                            value={valueOnChange}
                            onChange={this.handleChange}
                        />                                                
                    </label>
                    <input type="submit" value="send" />
                    
                    <br/>

                    <label>
                        the message:
                        <input 
                            type='text'
                            placeholder='type there'
                            value={valueOnChange}
                            onChange={this.handleChange} 

                        />                                      
                    </label>
                    <input type="submit" value="send" />

                    <br/>

                    <label>
                        <select 
                            value={valueOnSubmit}
                            onChange={this.handleChange}
                        >
                            <option value={selectArray[0]}>{selectArray[0]}</option>
                            <option value={selectArray[1]}>{selectArray[1]}</option>
                            <option value={selectArray[2]}>{selectArray[2]}</option>
                        </select>
                    </label>
                    <input type="submit" value="select" />

                    <br/>

                    <input type="file" />
                </form>
            </div>
        )
    }
}