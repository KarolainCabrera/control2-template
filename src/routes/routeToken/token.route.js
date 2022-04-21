const { message } = require('koa/lib/response')
const response =  require('koa/lib/response')
const tokenAction = require('../../action/Token/token')

exports.getTokens = (ctx) => {
    
    ctx.response.status = 409

    let Obtenciontoken = tokenAction.gettoken()[0]
    let Key = tokenAction.gettoken()[2]
    let Secret = tokenAction.gettoken()[1]

    let User = tokenAction.getUsuario()

    
    

    if (Key != "tel335" || Secret != "f68747ae-731f-46f6-92a8-c21180ff7b59"){
        
        ctx.body = {
            status: ctx.response.status,
            message: 'Conflicto: Key incorrecta'
        }
    }
    else{
        ctx.body= {
            message: "token: ", Obtenciontoken
        }
    }

}

exports.getUsuarios = (ctx) => {

    ctx.body = {
        message: "El usuario es: ", User
    }
}