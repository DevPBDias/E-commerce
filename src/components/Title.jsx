/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';

function Title({ name, className }) {
  return (
    <p className={className}>{ name }</p>
  );
}

Title.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
};

export default Title;
