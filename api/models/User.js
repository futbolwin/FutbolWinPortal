
var bcrypt = require('bcrypt')

module.exports = {
	connection: 'FutbolWinDB_Postgres',
  	tableName: 'fwuser',
  	autoCreatedAt: true,
  	autoUpdatedAt: true,
	attributes: {
		id: {
			primaryKey: true,
			type: 'integer',
            unique: true,
            autoPK: true,
            autoIncrement: true
		},        
        name: {
            type: 'string'
        },
        lastname: {
            type: 'string'
        },
		username: {
			type: 'string',
            unique: true
		},
		email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
  	},
  	beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

