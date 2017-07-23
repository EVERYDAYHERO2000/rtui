import React from 'react';
import PropTypes from 'prop-types';


export default function Link({ theme, icon, size, link, children }) {
	const classList = [ 
		'link',  
		Link.theme[theme], 
    Link.size[size] 
	].join(' ').trim().replace(/\s+/g,' ');  
			
	return (
		<a 
			href={link} 
			className={classList}>
			{(icon) ? <i className={'fa ' + icon}></i> : ''}
			{children}
		</a>
	);
}

Link.propTypes = {
	/**
	 * Текст ссылки:
	 */
	children: PropTypes.string.isRequired,
	/**
	 * Ссылка:
	 */
	link: PropTypes.string,
	/**
	 * Размер:
	 */
	size: PropTypes.oneOf(['m', 's', 'xs']),
	/**
	 * Иконка:
	 */
	icon: PropTypes.string,	
	/**
	 * Тема:
	 */	
	theme: PropTypes.oneOf(['default','item'])   
    
};

Link.defaultProps = {
	size: 'm',
	theme: 'default'  
};

Link.size = {
	xs: 'link_xs',
	s: 'link_s',
	m: 'link_m'
};

Link.theme = {
	default: '',
	item: 'link_item'
};

