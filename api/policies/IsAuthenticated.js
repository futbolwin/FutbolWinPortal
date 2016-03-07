module.exports = function(request, response, next) {
	
  if (request.isAuthenticated()) {
    console.log('[isAuthenticated] request.isAuthenticated() es "TRUE" y hace next() ')
    return next();
  } else {
    return response.redirect('/login');
  }
  
};