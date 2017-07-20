import React from 'react';
import PropTypes from 'prop-types';


export default function Text({ color, description, size, children }) {
	const classList = [ 
		'text', 
		Text.size[size], 
		Text.color[color], 
		Text.description[description]
	].join(' ').trim(); 
	
	return (
		<p className={classList}>
			{children}
		</p>
	);
}

Text.propTypes = {
	/**
	 * Текст:
	 */
	children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
		PropTypes.element
  ]),
	/**
	 * Размер:
	 */
	size: PropTypes.oneOf(['xs', 's', 'm']),
	/**
	 * Цвет:
	 */
	color: PropTypes.oneOf(['none', 'white']),
	/**
	 * Полупрозрачный:
	 */	
	description: PropTypes.oneOf(['off','on'])
};

Text.defaultProps = {
	size: 'm',
	color: 'none',
	description: 'off'
};

Text.size = {
	xs: 'text_xs',
	s: 'text_s',
	m: 'text_m'
};

Text.color = {
	none: '',
	white: 'text_white'
};

Text.description = {
	off: '',
	on: 'text_description'
};

