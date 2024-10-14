import React from 'react';

const Button = ({ onClick, label, className = 'button is-primary' }) => {
    return (
        <button className={className} onClick={onClick} style={{ marginBottom: '2rem' }}>
            {label}
        </button>
    );
};

export default Button;
