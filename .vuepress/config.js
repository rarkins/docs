module.exports = {
  title: 'ls-lint',
  description: 'An extremely fast file and directory name linter - Bring some structure to your project directories',
  base: '/',

  head: [
    [
      'meta',
      {
        property: 'og:title',
        content: 'ls-lint',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'An extremely fast file and directory name linter - Bring some structure to your project directories',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://ls-lint.org',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/open-graph-img.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    [
      'script',
      {},
      `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W7WKJZ7');
      `,
    ],
    [
      'script',
      {},
      `
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1913500,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    ],
    [
      'link',
      {
        href: 'https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.js',
      },
    ],
    [
      'script',
      {},
      `
        window.addEventListener("load", function(){window.wpcc.init({"corners":"small","colors":{"popup":{"background":"#f4f4f4","text":"#000000","border":"#555555"},"button":{"background":"#4585ab","text":"#ffffff"}},"position":"bottom-right","padding":"small","margin":"large","transparency":"5","content":{"href":"https://ls-lint.org/1.x/legal/privacy.html"}})});
      `,
    ],
  ],

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/loeffel-io/ls-lint/master/ls-lint.png',
    displayAllHeaders: false,
    sidebarDepth: 1,

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/loeffel-io/ls-lint',
      },
      {
        text: 'Legal',
        link: 'https://ls-lint.org/1.x/legal/imprint.html',
      },
    ],

    sidebar: {
      '/': [
        {
          title: 'Prologue',
          collapsable: false,
          children: prefix('prologue', [
            'changelog',
            'contributions',
          ]),
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: prefix('getting-started', [
            'introduction',
            'installation',
          ]),
        },
        {
          title: 'Configuration',
          collapsable: false,
          children: prefix('configuration', [
            'the-basics',
            'the-rules',
          ]),
        },
        {
          title: 'Legal',
          collapsable: false,
          children: prefix('legal', [
            'imprint',
            'privacy',
          ]),
        },
      ],
    },
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-171718804-1', // UA-00000000-0
      },
    ],
  ],
};

function prefix(prefix, children) {
  return children.map(child => `/1.x/${prefix}/${child}`);
}
