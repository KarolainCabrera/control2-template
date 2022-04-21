const tokenData = require('../../utils/uuid.js')
const keySecret = require('../../utils/constants.js')
const usuario = require('../../data/users.js')

exports.gettoken = (id, secret, key) => {
    
    let tokenObtenido = getUUIDV4()
    let respuesta = [tokenObtenido, secret, key, id]
    return respuesta
}

exports.getUsuario = (gettoken[0]) => {

    let Usuario = getUsers()
    return Usuario
}