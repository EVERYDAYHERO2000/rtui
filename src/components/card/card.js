import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ color, size, border }) {
	const classList = [ 
		'card', 
		Card.color[color],
		Card.size[size],
		Card.border[border]
	].join(' ').trim().replace(/\s+/g,' '); 
	
	
	
	return (
		<div className="card card_tarif">
					<div className="card__head">
						<OptionIcon icon="optionicon_1" />
						<OptionIcon icon="optionicon_3" />
						<OptionIcon icon="optionicon_4" />
					</div>
					<div className="card__description">
						<Header size="s">Максимум</Header>
						<Text size="s">Включает СТАРТОВЫЙ + спортивные, детские и музыкальные телеканалы + познавательные телеканалы + дополнительный пакет ТВОЁ КИНО</Text>
					</div>
					<div className="card__footer">
						<Price prewprice="850" newprice="600" period="m" />
						<Button href="#" text="Подключить" />
					</div>
		</div>
	);
}

Card.propTypes = {
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

Card.defaultProps = {
	size: 'none',
	color: 'none',
	border: 'on'
};

Card.size = {
	none : '',
	s: '',
	m: 'optionicon_m'
};

Card.color = {
	none: '',
	white: 'optionicon_white'
};

Card.border = {
	on: '',
	off: 'optionicon_clear'
};

