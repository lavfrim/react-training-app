import React, { PureComponent } from 'react';
import Child from '../Child';
import { connect } from 'react-redux';


const addToCount = () => {
    return {
        type: 'COUNT_ADD',
        payload: 1,
    }
}

const addMessageText = (message) => {    
    return {
        type: 'ADD_MESSAGE',
        payload: message,
    }   
}

function mapStateToProps(state) {
    const { count, parentMsg, message } = state;
    return {
        count: count,
        parentMsg: parentMsg,
        message: message,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickHandler: () => dispatch(addToCount()),
        setMessageText: (text) => dispatch(addMessageText(text)),
    }
}

class Parent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            perentInfo: 'this is state info from Perent',
        }
    }
   
    render() {
        const { count, parentMsg, message, onClickHandler, setMessageText } = this.props;
        return (
            <div style={{margin: '20px'}}>
                <h2>{this.state.perentInfo}</h2>
                <p>{parentMsg}</p>
                <p>{` - ${count} - `}</p>
                <button onClick={onClickHandler}>{'+1'}</button>
                {message !== '' && <p>{message}</p>}
                <input type="text" onChange={(event) => setMessageText(event.target.value)}/>
                <Child />
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Parent);