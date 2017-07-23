import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ data, rt }) {
	const classList = [ 
		'price', 
		Price.rt[rt]
	].join(' ').trim().replace(/\s+/g,' ');   
    
	return (
		<div className={classList}>
			{(data.prewprice) ? <div className="price__prev">{data.prewprice}</div> : ''}
			<div className="price__new">{data.newprice}</div>
			<div className="price__unit">
				{data.unit + ( (data.period) ? '\n' + data.period : '' )}
			</div>
		</div>
	);

}

Price.propTypes = {
	/**
	 * data.prewprice, data.newprice, data.unit, data.period:
	 */
	data: PropTypes.object,
	/**
	 * Услуга (цвет):
	 */	
	rt: PropTypes.oneOf(['none', 'main', 'internet','tv', 'phone', 'mobile']) 	
};

Price.defaultProps = {
	rt: 'none'
};

Price.rt = {
	none: '',
	main: 'price_main',
  internet: 'price_internet',
  tv: 'price_tv',
  phone: 'price_phone',
  mobile: 'price_mobile'    
};

