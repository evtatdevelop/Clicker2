import React from 'react';
import './clicker.css';
import App from "../../App";

function Button(props){
    return (
        <button className="btn_clicker" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onValueChange(e.target.value)
    }
    render() {
        return(
            <input
                className='inp_clicker'
                value={this.props.value}
                onChange={this.handleChange}
            />
        )
    }
}

export class Clicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(value){
        this.setState(
            {value: value}
        )
    }

    handleClick(move){
        let newValue;
        if (move === 'up') {
            newValue = +this.state.value + 1
        } else {
            this.state.value === 0 ? newValue = 0 : newValue = this.state.value - 1
        }
        this.setState({ value: newValue })
    }



    render() {
        return(
            <div>
                <Button value='+' onClick={() => this.handleClick('up')} />
                <Input value={this.state.value} onValueChange={this.handleChange} />
                <Button value='-' onClick={() => this.handleClick('down')} />
            </div>
        );
    }
}

