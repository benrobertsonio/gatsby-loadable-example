import React from 'react';
import PropTypes from 'prop-types';

const heroStyles = {
  height: `500px`,
  backgroundColor: `tomato`
}

const Hero = ({ title }) => (
  <div style={heroStyles}>
    <h1>Test Test</h1>
  </div>
);

Hero.propTypes = {};

export default Hero;