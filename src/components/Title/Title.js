import React from 'react';
import PropTypes from 'prop-types';

const Title = ({className, label}) => (
    <h1 className={className}>
        {label}
    </h1>
);

Title.PropTypes = {
    label:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
};

export default Title;