const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GoACS Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  host: 'localhost',
  port: 8081,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/goacs/goacs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/': {
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'API',
            link: '/api/'
          },
          {
            text: 'GoACS',
            link: 'https://goacs.net'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        },
      },
      '/pl/': {
        nav: [
          {
            text: 'Przewodnik',
            link: '/pl/guide/',
          },
          {
            text: 'API',
            link: '/pl/api/'
          },
          {
            text: 'GoACS',
            link: 'https://goacs.net'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Przewodnik',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        },
      },
    },

  },

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
    },
    '/pl/': {
      lang: 'pl-PL',
      title: 'GoACS Dokumentacja',
      description: 'Dokumentacja systemu GoACS'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
