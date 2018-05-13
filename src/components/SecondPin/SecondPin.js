import React from 'react';
import PropTypes from 'prop-types';
import './SecondPin.css'

const SecondPin = ({letter}, {label}) => (
    <div className="SecondPin">
        {letter}
        {label}
    </div>
);


SecondPin.PropTypes = {
    letter:PropTypes.string.isRequired,
};

export default SecondPin;


