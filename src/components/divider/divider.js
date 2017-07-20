import React from 'react';
import PropTypes from 'prop-types';


export default function Divider({ children }) {
	
	return (
		<div className="divider">
			{children}
		</div>
	);
}

Divider.propTypes = {
	/**
	 * Текст для разделителя:
	 */
	children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
		PropTypes.element
  ])
};
