import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ prewprice, newprice, unit, period, theme }) {
	const classList = [ 
		'price', 
		Price.theme[theme]
	].join(' ').trim().replace(/\s+/g,' '); 
	
	
	
	return (
		<div className="price">
			{(prewprice) ? <div className="price__prev">{prewprice}</div> : ''}
			<div className="price__new">{newprice}</div>
			<div className="price__unit">
				{Price.unit[unit] + ((Price.period[period] && Price.period[period] !== 'none') ? '\n' + Price.period[period] : '')}
			</div>
		</div>
	);
}

Price.propTypes = {
	/**
	 * Старая цена:
	 */
	prevprice: PropTypes.string,
	/**
	 * Новая цена:
	 */
	newprice: PropTypes.string.isRequired,
	/**
	 * Денежная еденица:
	 */
	unit: PropTypes.oneOf(['rub']),
	/**
	 * Период:
	 */
	period: PropTypes.oneOf(['none','y', 'm', 'd']),	
	/**
	 * Услуга:
	 */
	theme: PropTypes.oneOf(['none', 'white']),		
};

Price.defaultProps = {
	unit: 'rub',
	period: 'm',
	theme: 'none'
};

Price.unit = {
	rub : 'руб.'
};

Price.period = {
	none: '',
	y: 'год',
	m: 'мес.',
	d: 'день'
};

Price.theme = {
	none: '',
	white: 'price_dark'
};

