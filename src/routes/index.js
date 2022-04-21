import Router from 'koa-router'
import { gettoken, getUsuario } from '../actions/Token/token'
import getHealth from './health/health'

const router = new Router()

router.get('/health', getHealth)
router.get('/token', gettoken)
router.get('/token',getUsuario)

export default router
