const crypto = require('crypto')



module.exports = {
    hashPassword : function(password) {
    return crypto.createHash('sha256').update(password).digest('hex')
    }
}

