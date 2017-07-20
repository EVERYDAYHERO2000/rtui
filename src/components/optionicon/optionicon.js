import React from 'react';
import PropTypes from 'prop-types';


export default function OptionIcon({ color, size, icon, border }) {
	const classList = [ 
		'optionicon', 
		icon, 
		OptionIcon.color[color],
		OptionIcon.size[size],
		OptionIcon.border[border]
	].join(' ').trim(); 
	
	
	
	return (
		<div className={classList}>
		</div>
	);
}

OptionIcon.propTypes = {
	/**
	 * Иконка (optionicon_1 ... optionicon_397)
	 */
	icon: PropTypes.string.isRequired,
	/**
	 * Размер:
	 */
	size: PropTypes.oneOf(['none', 's', 'm']),
	/**
	 * Цает кнопки:
	 */
	color: PropTypes.oneOf(['none','white']),
		/**
	 * Рамка:
	 */
	border: PropTypes.oneOf(['off','on'])
};

OptionIcon.defaultProps = {
	size: 'none',
	color: 'none',
	border: 'on'
};

OptionIcon.size = {
	none : '',
	s: '',
	m: 'optionicon_m'
};

OptionIcon.color = {
	none: '',
	white: 'optionicon_white'
};

OptionIcon.border = {
	on: '',
	off: 'optionicon_clear'
};

