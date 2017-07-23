import React from 'react';
import PropTypes from 'prop-types';


export default function Logo({ type, text, link }) {
	const classList = [ 
		'logo', 
		Logo.type[type]
	].join(' ').trim().replace(/\s+/g,' '); 
	
    const LogoType = `${(link)? 'a' : 'div'}`;  
    
	return (
		<LogoType 
      href={(link)? link : ''} 
      className={classList}>
			{(type === 'icon')? text : ''}
		</LogoType>
	);
}

Logo.propTypes = {
	/**
	 * Текст:
	 */
	text: PropTypes.string,
	/**
	 * Тип:
	 */
	type: PropTypes.oneOf(['logo', 'icon']),
	/**
	 * Ссылка:
	 */
	link: PropTypes.string   
};

Logo.defaultProps = {
	type: 'logo'
};

Logo.type = {
	logo: '',
	icon: 'logo_icon'
};



