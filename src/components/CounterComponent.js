import React, {Component} from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../actions/counter';
import {Button, FormControl} from 'react-bootstrap';

class CounterComponent extends Component
{
    static propTypes = {
        counter: React.PropTypes.number.isRequired,
        increment: React.PropTypes.func.isRequired,
        decrement: React.PropTypes.func.isRequired,
    }

    render()
    {
        const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
        const {counter, increment, decrement} = this.props;

        return(
            <div>
                <h1 className="text-center text-muted">Counter con React + Redux</h1>
                <div className="well" style={wellStyles}>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        block
                        onClick={increment}
                    >
                        Increment
                    </Button>
                    <br />
                    <FormControl
                        type="text"
                        value={counter}
                        disabled
                    />
                    <br />
                    <Button
                        bsSize="large"
                        block
                        onClick={decrement}
                    >
                        Decrement
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter.count
})

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)