var nav = require('./links/nav.js');
var sidebar = require('./links/sidebar.js');

module.exports = {
  base: '/ts-pattern/',
  title: 'Ts-Pattern',
  description: 'The implementation of Zen Design Pattern with typescript',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  port: '8890',

  themeConfig: {
    nav,
    sidebar,
  },
};
