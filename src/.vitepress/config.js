const { description } = require('../../package')
import { SearchPlugin } from "vitepress-plugin-search";


module.exports = {
  base: '/',
  title: 'GoACS Documentation',
  description: description,
  host: 'localhost',
  port: 8088,
  lastUpdated: true,
  plugins: [SearchPlugin()],
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: 'https://github.com/goacs/goacs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/goacs/goacs' },
    ],
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            {text: 'What is GoACS?', link: '/guide/'},
            {text: 'Installation', link: '/guide/install.md'},
            {text: 'Getting Started', link: '/guide/start.md'},
            {text: 'Protocol info', link: '/guide/protocol.md'}
          ]
        },
        {
          text: 'Configuration',
          items: [
            {text: 'Device', link: '/guide/device.md'},
            {text: 'Configuration', link: '/guide/configuration.md'},
            {text: 'Scripting', link: '/guide/scripting.md'},
            {text: 'Templates', link: '/guide/templates.md'},
            {text: 'Settings', link: '/guide/settings.md'},
            {text: 'Debug', link: '/guide/debug.md'},
            {text: 'Files', link: '/guide/files.md'},
          ]
        },
        {
          text: 'Extra',
          items: [
            {text: 'Tested devices', link: '/guide/tested_devices.md'},
            {text: 'High availability', link: '/guide/ha.md'},
            {text: 'Server customization', link: '/guide/customization.md'},
          ]
        }
      ],
      '/api/': [
        {
          text: 'Api',
          items: [
            {text: 'Index', link: '/api/'},
          ]
        }
      ]
    }
  },
}
