import PropTypes from 'prop-types';

export default {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
  className: PropTypes.string
}
