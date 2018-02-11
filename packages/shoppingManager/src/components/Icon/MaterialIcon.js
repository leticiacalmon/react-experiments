import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Icon.scss';

/**
 * MaterialIcon
 * This is a facade for MaterialIcon component. It is
 * done due to maintainability in case the Icon library needs to
 * be changed.
 * @param {object} props
 */
const MaterialIcon = ({ className, name, pulse, spin, type, ...props }) => {
  const finalClassName = classnames('icon icon-material', className, { [styles.pulse]: pulse });
  return (<i className={finalClassName} {...props}>{name.replace(/(\s+)/igm, '_')}</i>);
};

MaterialIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
  size: PropTypes.string,
  spin: PropTypes.bool
};

MaterialIcon.defaultProps = {
  className: '',
  pulse: false,
  size: '2',
  spin: false
};

export default MaterialIcon;