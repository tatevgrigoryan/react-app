import React from 'react';
import PropTypes from 'prop-types';
const Subtitle = ({children, className }) => (
    <h5 className={className}>
        {children}
    </h5>
);

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
    ClassName:PropTypes.string,
}

Subtitle.defaultProps = {
    className:''
}

export default Subtitle;