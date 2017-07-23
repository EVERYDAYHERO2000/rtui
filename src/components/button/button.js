import React from 'react';
import PropTypes from 'prop-types';


export default function Button({ id, text, theme, type, rt, icon, size, autosize, link }) {
	const classList = [ 
		'button', 
		Button.size[size],  
		Button.theme[theme], 
    Button.rt[rt],  
		Button.autosize[autosize] 
	].join(' ').trim().replace(/\s+/g,' '); 
	
	const ButtonType = `${Button.type[type]}`;  
			
	return (
		<ButtonType 
		  id={(id)? id : ''}
			href={(type === 'a') ? link : ''} 
			className={classList}>
			{(icon) ? <i className={'fa ' + icon}></i> : ''}
			{text}
		</ButtonType>
	);
}

Button.propTypes = {
	/**
	 * Текст на кнопке:
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Ссылка:
	 */
	link: PropTypes.string,
	/**
	 * Размер:
	 */
	size: PropTypes.oneOf(['m', 's']),
	/**
	 * Иконка:
	 */
	icon: PropTypes.string,	
	/**
	 * Тема:
	 */	
	theme: PropTypes.oneOf(['default','line']),
	/**
	 * Авторазмер по содержимому:
	 */	
	autosize: PropTypes.oneOf(['true','false']),
	/**
	 * Тип элемента:
	 */	
	type: PropTypes.oneOf(['div','a', 'button', 'label']),
	/**
	 * Услуга (цвет):
	 */	
	rt: PropTypes.oneOf(['none', 'main', 'internet','tv', 'phone', 'mobile'])    
    
};

Button.defaultProps = {
	size: 'm',
	theme: 'default',
	autosize: 'false',
	type: 'a',
  rt: 'none'    
};

Button.size = {
	s: 'button_s',
	m: 'button_m'
};

Button.theme = {
	default: '',
	line: 'button_line'
};

Button.rt = {
	none: '',
	main: 'button_main',
  internet: 'button_internet',
  tv: 'button_tv',
  phone: 'button_phone',
  mobile: 'button_mobile'    
};

Button.autosize = {
	false: '',
	true: 'button_autosize'
};

Button.type = {
	div: 'div',
	a: 'a',
	button: 'button',
	label: 'label'
}
