import React from 'react';
import PropTypes from 'prop-types';
import './Pin.css'

const Pin = ({letter}) => (
    <div className="pin">
        {letter}
    </div>
);


Pin.PropTypes = {
    letter:PropTypes.string.isRequired,
};

export default Pin;


