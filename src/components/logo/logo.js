import React from 'react';
import PropTypes from 'prop-types';


export default function Logo({ theme, mode, text, link }) {
	const classList = [ 
		'logo', 
		Logo.theme[theme], 
		Logo.mode[mode]
	].join(' ').trim().replace(/\s+/g,' '); 
	
    const LogoType = `${(link)? 'a' : 'div'}`;  
    
	return (
		<LogoType href={(link)? link : ''} className={classList}>
			{(mode === 'icon')? text : ''}
		</LogoType>
	);
}

Logo.propTypes = {
	/**
	 * Текст:
	 */
	text: PropTypes.string,
	/**
	 * Тема:
	 */
	theme: PropTypes.oneOf(['b2c','b2b', 'white']),
	/**
	 * Режим:
	 */
	mode: PropTypes.oneOf(['logo', 'icon'])
};

Logo.defaultProps = {
	theme: 'b2c',
	mode: 'logo'
};

Logo.theme = {
	b2b: '',
	b2c: '',
	white: ''
};

Logo.mode = {
	logo: '',
	icon: 'logo_icon'
};



