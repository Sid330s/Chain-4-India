'use strict'
const m = require('mithril')
const STORAGE_KEY = 'curator.authorization'
let authToken = null
const getAuth = () => {
  if (!authToken) {
    authToken = window.localStorage.getItem(STORAGE_KEY)
  }
  return authToken
}
module.exports = {
  getAuth
}