import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // constructor(props) {
    // super(props);
    // this.state = {
    //     number: 0
    // }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // }

    state = {
        number: 0,
        message: '',
        names: ['Angular', 'React', 'Vue', 'Ember']
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        // alert(this.state.message);
        this.setState({
            names: [...this.state.names, this.state.message],
            message: ''
        });
    }
    handleKeyPress = (e) => {
        //if (e.key === 'Enter') {
        if (e.keyCode === 13) {
            this.handleClick();
        }
    }

    handleRemove = (index) => {
        const { names } = this.state;
        this.setState({
            // names: [
            //     ...names.slice(0, index),
            //     ...names.slice(index + 1, names.length)
            // ]
            // filter를 통해 index 번째를 제외한 원소맂 있는 새 배열 생성
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const { name, value } = this.props;
        const { number, message, names } = this.state;
        const { handleChange, handleClick, handleKeyPress, handleRemove } = this;

        const nameList = names.map((name, index) => (<li key={index} onDoubleClick={() => handleRemove(index)}>{name}</li>));

        return (
            <div>
                <h2> chlid component {name} value= {value}</h2>
                <h3> 상태변수 {number}</h3>
                <button onClick={() => {
                    this.setState({
                        number: number + 1
                    });
                    this.msgInput.focus();
                }}>증가</button>
                <br />
                <ul>
                    {nameList}
                </ul>
                <span>{message}</span>  <br />
                <input type="text" name="message" value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    ref={(arg) => this.msgInput = arg}
                />
                {/* <input type="text" value={message}  onChange={handleChange} /> */}
                <button onClick={handleClick} >확인</button>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: "기본이름"
};
MyComponent.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number.isRequired
};

export default MyComponent;