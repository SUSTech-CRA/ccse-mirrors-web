const moment = require('moment')

module.exports = {
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'SUSTech Open Source Mirrors',
      description: 'Open source mirror site supported by SUSTech Center for Computational Science and Engineering & SUSTech Computer Research Association',
    }
  },
  head: [
    ['script', {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0KD226TRZ5'
    }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-0KD226TRZ5');
    `],
  ],
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [{
          id: 'news',
          dirname: '_news',
          path: '/news/',
          itemPermalink: '/news/:year/:month/:slug.html',
          layout: 'IndexNews',
          itemLayout: 'Layout',
          pagination: {
            lengthPerPage: 9,
            layout: 'IndexNews'
          }
        }]
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        }
      }
    ],
    '@vuepress/back-to-top',
    [
      'sitemap',
      {
        hostname: 'https://mirrors.sustech.edu.cn'
      },
    ]
  ],

  themeConfig: {
    locales: {
      '/': {
        nav: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'News',
            link: '/news/'
          },
          {
            text: 'Help',
            link: '/help/'
          },
          {
            text: 'Status',
            link: '/status/'
          },
          {
            text: 'About',
            link: '/about/'
          },
          {
            text: 'SUSTech CCSE',
            link: 'http://hpc.sustech.edu.cn/'
          },
          {
            text: 'SUSTech CRA',
            link: 'https://blog.sustcra.com/'
          }
        ],
        sidebar: {}
      }
    },
    docsRepo: 'ziqin/ccse-mirrors-web',
    docsDir: 'site',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    search: false,
    lastUpdated: 'Last Updated',
    logo: '/mirrors-logo.svg',
    serviceWorker: {
      updatePopup: true
    }
  },

  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3, 4]
    }
  }
}
