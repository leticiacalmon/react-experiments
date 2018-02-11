import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Icon.scss';
import MaterialIcon from './MaterialIcon'
import FlatIcon from './FlatIcon'

const typeIcons = {
  material: MaterialIcon,
  flat: FlatIcon,
};
/**
 * Icon
 * This is a facade for FontAwesome component "react-fa". It is
 * done due to maintainability in case the Icon library needs to
 * be changed.
 * @param {object} props
 */
const Icon = ({ type, ...props }) => {
  const ComponentIcon = typeIcons[type];
  return (<ComponentIcon {...props} />);
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
  size: PropTypes.string,
  spin: PropTypes.bool,
  type: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  pulse: false,
  size: '2',
  spin: false,
  type: 'material'
};

export default Icon;
