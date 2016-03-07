 module.exports = {

            _config: {
              actions: false,
              shortcuts: false,
              rest: false
            },

            find: function (request, response) {
              User.find(function foundUser (err, users) {
                if(err) {
                  return response.redirect('/');
                }
                response.view({
                  users: users
                });
              });
            
            },

            findAll: function (request, response) {
              User.find(function foundUser (err, users) {
                if(err) {
                  return response.send({});
                }
                response.json(users);
              });
            
            },

            create: function(request, response) {
              console.log('Entra a crear el usuario....');
              User.create(request.params.all(), function userCreated(err, user) {
                if (err) {
                  return response.redirect('/user/new');
                } 
                response.redirect('/user/show/' + user.id); 
              });
            },

};

