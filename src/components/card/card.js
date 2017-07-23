import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ rt, type, data, special }) {
	const classList = [ 
		'card', 
		Card.type[type],
		Card.rt[rt],
    Card.special[special]  
	].join(' ').trim().replace(/\s+/g,' '); 
	
	const icons = data.options.map(function(e,i){
    return (
       <OptionIcon key={i} icon={e.icon} /> 
    );
  });
	
	return (
		<div className={classList}>
					<div className="card__head">
						{icons}
					</div>
					<div className="card__description">
						<Header text={data.title} />
						<Text size="s">{data.description}</Text>
					</div>
					<div className="card__footer">
				    <Price rt={ (rt) ? rt : '' } data={data.price} />
						<Button rt={ (rt) ? rt : '' } link={data.link} text="Подключить" />
					</div>
		</div>
	);
}

Card.propTypes = {
	/**
	 * Данные:
	 */
	data: PropTypes.object,
	/**
	 * Услуга (цвет):
	 */	
	rt: PropTypes.oneOf(['none', 'main', 'internet','tv', 'phone', 'mobile']), 
	/**
	 * Акция:
	 */	
	special: PropTypes.oneOf(['false', 'true']),     
		/**
	 * Рамка:
	 */
	type: PropTypes.oneOf(['none','tarif'])
};

Card.defaultProps = {
	rt: 'none',
	type: 'tarif',
  srecial: 'falce'    
};

Card.special = {
  false: '',
  true: 'card_special'    
}

Card.rt = {
	none: '',
	main: 'card_main',
  internet: 'card_internet',
  tv: 'card_tv',
  phone: 'card_phone',
  mobile: 'card_mobile'    
};

Card.type = {
	none: '',
	tarif: 'card_tarif'
};

