import React from 'react';
import PropTypes from 'prop-types';


export default function Button({ color, size, line, autosize, children, tagName, href }) {
	const classList = [ 
		'button', 
		Button.size[size], 
		Button.color[color], 
		Button.line[line], 
		Button.autosize[autosize] 
	].join(' ').trim(); 
	
	const ButtonType = `${Button.tagName[tagName]}`;

	
	return (
		<ButtonType href={(tagName === 'a') ? '' : href} className={classList}>
			{children}
		</ButtonType>
	);
}

Button.propTypes = {
	/**
	 * Текст на кнопке:
	 */
	children: PropTypes.string.isRequired,
	/**
	 * Ссылка:
	 */
	href: PropTypes.string,
	/**
	 * Размер:
	 */	
	size: PropTypes.oneOf(['none', 's']),
	/**
	 * Цает кнопки:
	 */
	color: PropTypes.oneOf(['none','main', 'white', 'second', 'internet', 'tv','phone','mobile']),
	/**
	 * Контурная кнопка:
	 */	
	line: PropTypes.oneOf(['off','on']),
	/**
	 * Авторазмер по содержимому:
	 */	
	autosize: PropTypes.oneOf(['off','on']),
	/**
	 * Тэг элемента:
	 */	
	tagName: PropTypes.oneOf(['div','a', 'button'])
};

Button.defaultProps = {
	size: 'none',
	color: 'none',
	line: 'off',
	autosize: 'off',
	tagName: 'a'
};

Button.size = {
	none : '',
	xs: 'button_xs',
	s: 'button_s',
	m: 'button_m',
	l: 'button_l',
	xl: 'button_xl'
};

Button.color = {
	none: '',
	main: 'button_main',
	white: 'button_white',
	second: 'button_second',
	internet: 'button_internet',
	tv: 'button_tv',
	phone: 'button_phone',
	mobile: 'button_mobile'
};

Button.line = {
	off: '',
	on: 'button_line'
};

Button.autosize = {
	off: '',
	on: 'button_autosize'
};

Button.tagName = {
	div: 'div',
	a: 'a',
	button: 'button'
}
