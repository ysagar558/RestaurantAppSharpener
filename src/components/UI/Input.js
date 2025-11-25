// Input.js (Update this file!)
import React from 'react';
import classes from './Input.module.css';

// 1. Wrap the component with React.forwardRef()
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> 
        </div>
    );
});

export default Input;