module.exports = function(request, response, next){
	console.log("El idioma que llega es '"+request.param('language')+"'")
	request.setLocale(request.param('language'));
	next();
};