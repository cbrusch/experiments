import React from 'react';

//first, define a function
const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
);

export default Button
