import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className='input'>

            {props.children ? props.children : '0'}
        </div>
    )
};

export default Input;