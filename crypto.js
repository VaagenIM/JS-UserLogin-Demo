const crypto = require('crypto')
const pepper = "dZ0lyQg90NuDfmp2U6FJDmBUE6xMme"

const sha512 = x => crypto.createHash('sha512').update(x + pepper, 'utf8').digest('hex')

module.exports = {sha512}
