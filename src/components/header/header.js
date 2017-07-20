import React from 'react';
import PropTypes from 'prop-types';


export default function Header({ color, size, children }) {
	const classList = [ 
		'header', 
		Header.size[size], 
		Header.color[color]
	].join(' ').trim(); 
	
	const HeaderType = `${Header.tagName[size]}`;
	
	return (
		<HeaderType className={classList}>
			{children}
		</HeaderType>
	);
}

Header.propTypes = {
	/**
	 * Текст:
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Размер:
	 */
	size: PropTypes.oneOf(['promo','xs', 's', 'm','form','internet','tv','phone','mobile']),
	/**
	 * Цвет:
	 */
	color: PropTypes.oneOf(['none', 'white'])
};

Header.defaultProps = {
	size: 'm',
	color: 'none'
};

Header.size = {
	promo: 'header_promo',
	xs: 'header_xs',
	s: 'header_s',
	m: 'header_m',
	form: 'header_form',
	internet: 'header_form header_internet',
	tv: 'header_form header_tv',
	phone: 'header_form header_phone',
	mobile: 'header_form header_modile'
};

Header.tagName = {
	promo: 'h1',
	xs: 'h4',
	s: 'h3',
	m: 'h2',
	form: 'h3',
	internet: 'h3',
	tv: 'h3',
	phone: 'h3',
	mobile: 'h3'
};

Header.color = {
	none: '',
	white: 'header_white'
};


