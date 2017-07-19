import React from 'react';
import PropTypes from 'prop-types';


export default function Header({ color, type, children }) {
	const classList = [ 
		'header', 
		Header.type[type], 
		Header.color[color]
	].join(' ').trim(); 
	
	const HeaderType = `${Header.tagName[type]}`;
	
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
	type: PropTypes.oneOf(['promo','xs', 's', 'm','form','internet','tv','phone','mobile']),
	/**
	 * Цвет:
	 */
	color: PropTypes.oneOf(['none', 'white'])
};

Header.defaultProps = {
	type: 'm',
	color: 'none'
};

Header.type = {
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


