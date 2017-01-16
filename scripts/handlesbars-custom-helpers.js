/* global Handlebars */

Handlebars.registerHelper('eq', function (val, val2, options) {
	if(val.trim() === val2.trim()){
		return options.fn(this);
	}
});

Handlebars.registerHelper('noteq', function(val, val2, options) {
	if(val.trim() !== val2.trim()){
		return options.fn(this);
	}
});