import React from 'react';
import PropTypes from 'prop-types';

export default function OptionIcon({ size, icon, theme }) {
	const classList = [ 
		'optionicon', 
		icon, 
		OptionIcon.size[size],
		OptionIcon.theme[theme]
	].join(' ').trim().replace(/\s+/g,' '); 
	
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
	size: PropTypes.oneOf(['s', 'm']),
	/**
	 * Тема:
	 */
	theme: PropTypes.oneOf(['normal','border'])
};

OptionIcon.defaultProps = {
	size: 's',
	theme: 'border'
};

OptionIcon.size = {
	s: '',
	m: 'optionicon_m'
};

OptionIcon.theme = {
	border: '',
	normal: 'optionicon_clear'
};

