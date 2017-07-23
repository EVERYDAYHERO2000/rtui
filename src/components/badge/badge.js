import React from 'react';
import PropTypes from 'prop-types';


export default function Badge({ theme, type, link }) {
	const classList = [ 
		'badge',  
		Badge.type[type],
		Badge.theme[theme]
	].join(' ').trim().replace(/\s+/g,' ');  
			
	return (
		<a 
			href={link} 
			className={classList}>
		</a>
	);
}

Badge.propTypes = {
	/**
	 * Ссылка:
	 */
	link: PropTypes.string,
	/**
	 * Тип:
	 */
	type: PropTypes.oneOf(['apple', 'google']),
	/**
	 * Тема:
	 */
	theme: PropTypes.oneOf(['default', 'opacity'])
};

Badge.defaultProps = {
	type: 'google',
	theme: 'default'
};

Badge.type = {
	google: 'badge_google-play',
	apple: 'badge_app-store'
};

Badge.theme = {
	default: '',
	item: 'badge_gray'
};


