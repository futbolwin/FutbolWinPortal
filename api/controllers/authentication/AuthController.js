
var authService = require('./AuthService.js')

module.exports = {

	_config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {
    	console.log('[AuthController.login] Ingresó a function login')
        authService.login(req, res)
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
	
};

