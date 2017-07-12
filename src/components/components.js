require.config({
	paths: {
		'babel' : '../libs/babel/browser.min',
		'jsx': '../libs/require/jsx',
		'text' : '../libs/require/text'
	},
	jsx: {
    fileExtension: '.js',
		transformOptions: {
      harmony: true,
      stripTypes: false
    }
  },
	shim: {
    JSXTransformer: {
      exports: "JSXTransformer"
    }
  }
});

require(['jsx!components/text/text.js',
				 'components/badge/badge.js',
				 'components/button/button.js',
				 'components/buttongroup/buttongroup.js',
				 'components/card/card.js',
				 'components/cardpack/cardpack.js',
				 'components/checkbox/checkbox.js',
				 'components/divider/divider.js',
				 'components/form/form.js',
				 'components/header/header.js',
				 'components/input/input.js',
				 'components/layout/layout.js',
				 'components/link/link.js',
				 'components/linklist/linklist.js',
				 'components/logo/logo.js',
				 'components/navigation/navigation.js',
				 'components/option/option.js',
				 'components/optionicon/optionicon.js',
				 'components/popup/popup.js',
				 'components/portalmenu/portalmenu.js',
				 'components/price/price.js',
				 'components/radiobutton/radiobutton.js',
				 'components/select/select.js',
				 'components/social/social.js',
				 'components/spinner/spinner.js',
				 'components/table/table.js',
				 'components/textarea/textarea.js',
				 'components/treelist/treelist.js'
				], function(App){
	
console.log(App)

var App = App();  
  
ReactDOM.render(
  <App />,
  document.getElementById('rtui')
);
});


