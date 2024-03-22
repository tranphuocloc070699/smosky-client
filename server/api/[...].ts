import { joinURL } from 'ufo'
import { Routes } from './routes.api'

export default defineEventHandler(async (event) => {
  const proxyUrl = useRuntimeConfig().boilerplateServer
  const authUrl = useRuntimeConfig().authServer

  let path = ''
  let target = ''
   if(event.path.startsWith(Routes.auth.name)){
    path = event.path.replace(Routes.auth.name, '') 
    target = joinURL(authUrl, path)
  }
  else if(event.path.startsWith(Routes.boilerplate.name)){
    path = event.path.replace(Routes.boilerplate.regex, '') 
    target = joinURL(proxyUrl, path)
  }

  return proxyRequest(event, target)
})