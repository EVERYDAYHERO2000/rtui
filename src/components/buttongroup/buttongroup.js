import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash';

export default function Buttongroup({ type, rt, size, data }) {
	
	const buttonGroupId = _.uniqueId('buttongroup_'); 
	
	const buttons = data.map(function(e,i){
		
		let buttonId = _.uniqueId('button_');
		
    const checkboxedButton = (
			 <div className="buttongroup__item" key={i} >	
			 <input 
					type={Buttongroup.type[type]} 
					htmlFor={buttonId} 
					name={buttonGroupId} 
					checked={(e.checked)? e.checked : ''}
					/>	
       <Button 
					id={buttonId}
					theme="line"
					type="label"
					rt={(rt)? rt : 'none'}
					size={(size)? size : 'm'}
					autosize="true"
					icon={(e.icon)? e.icon : ''}
					text={e.text}
					/>
			 </div>		
		);
		

		return checkboxedButton;
  })  
			
	
	return (
		<div className="buttongroup">
			{buttons}
		</div>
	);
}


Buttongroup.propTypes = {
	/**
	 * Кнопки:
	 */
	data: PropTypes.array,
	/**
	 * Размер:
	 */
	size: PropTypes.string,
	/**
	 * Услуга (цвет):
	 */	
	rt: PropTypes.string,
	/**
	 * Тип элемента:
	 */	
	type: PropTypes.oneOf(['radio','checkbox']),
};

Buttongroup.defaultProps = {
	type: 'radio'
};

Buttongroup.type = {
	radio: 'radio',
	checkbox: 'checkbox'
};
