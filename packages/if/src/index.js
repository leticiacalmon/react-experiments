import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

/**
 * If
 * Component that wraps other components and conditionally displays them.
 */
class If extends PureComponent {
  render() {
    const { className, expression, children } = this.props;
    if (expression && children) {
      if (typeof children === 'string') {
        return <span className={className}>{children}</span>;
      }

      return children;
    }

    return false;
  }
}

If.propTypes = {
  /**
   * Outer world class to modify internal styles when it is provided
   * a children as string.
   */
  className: PropTypes.string,
  /**
   * Node conditionally rendered. Note: this node is wrapped into
   * a span when a string is provided.
   */
  children: PropTypes.node.isRequired,
  /**
   * The flag that show/hide the children.
   */
  expression: PropTypes.bool.isRequired,
};

If.defaultProps = {
  className: '',
};

export default If;
