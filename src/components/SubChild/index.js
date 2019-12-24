import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class SubChild extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            subGhildInfo: 'this is state info from subChild',
        }
    }

    render() {
        const { count, subGhildInfo, message, dispatch } = this.props;
        return(
            <div style={{margin: '20px'}}>
                <h4>{this.state.subGhildInfo}</h4>
            <p>{subGhildInfo}</p>
            <p>{` - ${count} - `}</p>
            <button onClick={() => dispatch({
                type: 'COUNT_ADD',
                payload: -1,
            })}>{'-1'}</button>
            {message && <p>{message}</p>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { subGhildInfo, message, count } = state;
    return {
        count: count,
        message: message,
        subGhildInfo: subGhildInfo,
    }
}

function mapDispatchProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(SubChild)