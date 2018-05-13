import React, { Component } from 'react';
import './Content.css';
import PropTypes from 'prop-types';

const Content = ({title1, title2, text }) => (
    <div>
        <div className="content">
            <h3 className="heading">{title1}</h3>
            <h4 className="subHeading">{title2}</h4>
            <p className="intro">{text}</p>
        </div>
    </div>
);





Content.propTypes = {
    title1: PropTypes.node.isRequired,
    title2: PropTypes.node.isRequired,
    text: PropTypes.node.isRequired,
    ClassName:PropTypes.string,
}


export default Content;
