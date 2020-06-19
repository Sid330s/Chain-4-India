'use strict'
// These requires inform webpack which styles to build
require('bootstrap')
require('../styles/main.scss')
const m = require('mithril')
const api = require('./services/api')
const navigation = require('./components/navigation')
const AgentList = require('./views/agent_list')
const RegisterArtworkForm = require('./views/register_artwork_form')
const Dashboard = require('./views/dashboard')
const LoginForm = require('./views/login_form')
const ArtworkList = require('./views/artwork_list')
const SignupForm = require('./views/signup_form')
const Layout = {
  view (vnode) {
    return [
      vnode.attrs.navbar,
      m('.content.container', vnode.children)
    ]
  }
}
const loggedInNav = () => {
  const links = [
    ['/register', 'Register Artwork'],
    ['/artworks', 'View Artwork Registry'],
    ['/agents', 'View Agents']
  ]
  return m(navigation.Navbar, {}, [
    navigation.links(links),
    navigation.link('/profile', 'Profile'),
    navigation.button('/logout', 'Logout')
  ])
}
const loggedOutNav = () => {
  const links = [
    ['/artworks', 'View Artwork Registry'],
    ['/agents', 'View Agents']
  ]
  return m(navigation.Navbar, {}, [
    navigation.links(links),
    navigation.button('/login', 'Log in/Sign up')
  ])
}
const resolve = (view, restricted = false) => {
  const resolver = {}
  if (restricted) {
    resolver.onmatch = () => {
      if (api.getAuth()) return view
      m.route.set('/login')
    }
  }
  resolver.render = vnode => {
    if (api.getAuth()) {
      return m(Layout, { navbar: loggedInNav() }, m(view, vnode.attrs))
    }
    return m(Layout, { navbar: loggedOutNav() }, m(view, vnode.attrs))
  }
  return resolver
}
const logout = () => {
  m.route.set('/')
}
const profile = () => {
  m.route.set('/')
}
document.addEventListener('DOMContentLoaded', () => {
  m.route(document.querySelector('#app'), '/', {
    '/': resolve(Dashboard),
    '/agents': resolve(AgentList),
    '/register': resolve(RegisterArtworkForm, true),
    '/login': resolve(LoginForm),
    '/logout': { onmatch: logout },
    '/profile': { onmatch: profile},
    '/artworks': resolve(ArtworkList),
    '/signup': resolve(SignupForm)
  })
})