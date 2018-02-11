import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Icon.scss';

/**
 * FlatIcon
 * This is a facade for MaterialIcon component. It is
 * done due to maintainability in case the Icon library needs to
 * be changed.
 * @param {object} props
 */
const FlatIcon = ({ className, children, name, pulse, spin, ...props }) => {
  const iconClassName = (name || children).replace(/(\s+)/igm, '-');
  const finalClassName = classnames('icon-flaticon', className, iconClassName, { [styles.pulse]: pulse });

  return (<i className={finalClassName} {...props} />);
};

FlatIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
  size: PropTypes.string,
  spin: PropTypes.bool
};

FlatIcon.defaultProps = {
  className: '',
  pulse: false,
  size: '2',
  spin: false
};

export default FlatIcon;
