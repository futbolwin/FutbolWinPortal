
var passport = require('passport');

module.exports = {
	login: function (request, response) {
		console.log('[AuthService.login] Ingresó a function login')
		passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return response.send({
                    message: info.message,
                    user: user
                });
            }
            request.logIn(user, function(err) {
                if (err) response.send(err);
                /*
                return res.send({
                    message: info.message,
                    user: user
                });
                */
                /*
                res.redirect('/')
                */
                return response.view('index.ejs', 
                    { 
                        user: user 
                    }
                );
                /* Verificar res.ok() http://sailsjs.org/documentation/reference/response-res/res-ok */
            });
        })(request, response);
	}

}