'use strict'
const m = require('mithril')
const Navbar = {
  view (vnode) {
    return m('nav.navbar.navbar-expand-sm.navbar-dark.bg-primary.mb-5', [
      m('a.navbar-brand[href="/"]', {
        oncreate: m.route.link
      }, 'Curator'),
      m('button.navbar-toggler', {
        type: 'button',
        'data-toggle': 'collapse',
        'data-target': '#navbar',
        'aria-controls': 'navbar',
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation'
      }, m('span.navbar-toggler-icon')),
      m('#navbar.collapse.navbar-collapse', vnode.children)
    ])
  }
}
const links = items => {
  return m('ul.navbar-nav.mr-auto', items.map(([href, label]) => {
    return m('li.nav-item', [
      m('a.nav-link', { href, oncreate: m.route.link }, label)
    ])
  }))
}
const link = (href, label) => {
  return m('.navbar-nav', [
    m('a.nav-link', { href, oncreate: m.route.link }, label)
  ])
}
const button = (href, label) => {
  return m('a.btn.btn-outline-light.my-2.my-sm-0', {
    href,
    oncreate: m.route.link
  }, label)
}
module.exports = {
  Navbar,
  link,
  links,
  button
}