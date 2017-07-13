import React, { Component } from 'react';

class Text extends Component {
  render() {
		var content = this.props.content;
		
		var size = (function(s){
		var size;
		switch (s) {
			case 'xs':
				size = 'text_xs';
				break;
			case 's':
				size = 'text_s';
				break;
			case 'm':
				size = 'text_m';
				break;
			case 'l':
				size = 'text_l';
				break;	
			default :
				size = '';
				break;	
		}
			return size;	
		})(this.props.size);

		
    return (
      <p className={['text', size].join(' ')}>{content}</p>
    );
  }
}

export default Text;