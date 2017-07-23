import React from 'react';
import PropTypes from 'prop-types';


export default function Text({ theme, size, children }) {
	const classList = [ 
		'text', 
		Text.size[size], 
		Text.theme[theme]
	].join(' ').trim().replace(/\s+/g,' '); 
	
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
	 * Тема:
	 */
	theme: PropTypes.oneOf(['normal', 'description'])
};

Text.defaultProps = {
	size: 'm',
	theme: 'normal'
};

Text.size = {
	xs: 'text_xs',
	s: 'text_s',
	m: 'text_m'
};

Text.theme = {
	normal: '',
	description: 'text_description'
};

