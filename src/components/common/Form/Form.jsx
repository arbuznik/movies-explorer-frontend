import React from 'react';
import './Form.css';

const Form = ({ onSubmit, children, className}) => {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
