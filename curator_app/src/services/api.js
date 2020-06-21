'use strict'
const m = require('mithril')
const _ = require('lodash')
const API_PATH = 'api/'
const STORAGE_KEY = 'curator.authorization'
let authToken = null
const getAuth = () => {
  if (!authToken) {
    authToken = window.localStorage.getItem(STORAGE_KEY)
  }
  return authToken
}
const setAuth = token => {
  window.localStorage.setItem(STORAGE_KEY, token)
  authToken = token
  return authToken
}
const clearAuth = () => {
  const token = getAuth()
  window.localStorage.clear(STORAGE_KEY)
  authToken = null
  return token
}
const getPublicKey = () => {
  const token = getAuth()
  if (!token) return null
  const content = window.atob(token.split('.')[1])
  return JSON.parse(content).public_key
}
// Adds Authorization header and prepends API path to url
const baseRequest = opts => {
  const Authorization = getAuth()
  const authHeader = Authorization ? { Authorization } : {}
  opts.headers = _.assign(opts.headers, authHeader)
  opts.url = API_PATH + opts.url
  return m.request(opts)
}
const request = (method, endpoint, data) => {
  return baseRequest({
    method,
    url: endpoint,
    data
  })
}
const get = _.partial(request, 'GET')
const post = _.partial(request, 'POST')
const alertError = err => {
  console.error(err)
  window.alert(err.error || err.message || err)
  window.location.reload()
}
module.exports = {
  getAuth,
  setAuth,
  clearAuth,
  getPublicKey,
  post,
  get,
  alertError
}