import React from 'react';
import PropTypes from 'prop-types';


export default function Header({ theme, type, text, rt }) {
	const classList = [ 
		'header', 
    Header.theme[theme],  
		Header.type[type]["className"], 
		(theme === 'form')? Header.rt[rt] : ''
	].join(' ').trim().replace(/\s+/g,' '); 
	
	const HeaderType = `${Header.type[type]["tag"]}`;
	
	return (
		<HeaderType className={classList}>
			{text}
		</HeaderType>
	);
}

Header.propTypes = {
	/**
	 * Текст:
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Тема:
	 */
	theme: PropTypes.oneOf(['page','form']),
	/**
	 * Тип:
	 */	
	type: PropTypes.oneOf(['h1', 'h2', 'h3','h4', 'h5', 'h6']),     
	/**
	 * Услуга (цвет):
	 */	
	rt: PropTypes.oneOf(['none', 'main', 'internet','tv', 'phone', 'mobile']) 
};

Header.defaultProps = {
	theme: 'page',
	type: 'h3',
  rt: 'none'    
};

Header.theme = {
	page: '',
	form: 'header_form'
};

Header.rt = {
	none: '',
	main: 'header_main',
  internet: 'header_internet',
  tv: 'header_tv',
  phone: 'header_phone',
  mobile: 'header_mobile'    
};

Header.type = {
	h1: {tag: 'h1', className: 'header_l'},
	h2: {tag: 'h2', className: 'header_m'},
  h3: {tag: 'h3', className: 'header_s'},
  h4: {tag: 'h4', className: 'header_xs'},
  h5: {tag: 'h5', className: 'header_xs'},
  h6: {tag: 'h5', className: 'header_xs'}    
};


