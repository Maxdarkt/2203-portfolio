const development = process.env.NODE_ENV !== 'production'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },
  static: {
    prefix: false
  },
  server: {
    port: 8080,
  },
  router: {
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      const findEl = (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"))
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        );
      };
      setTimeout(async() => {
        if (to.hash) {
          const el = await findEl(to.hash)
          if ("scrollBehavior" in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
        }
      }, 200)

      return { x: 0, y: 0 }
    },
    extendRoutes(routes, resolve) {
      routes.push(
      {
        name: 'notFound',
        path: '/*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: development ? 'http://127.0.0.1:3000/api/' : 'https://mt-develop.com/api',
    headers: {
        common: {
          'Accept': 'application/json, text/plain, */*'
        },
        get: {'Content-Type': 'application/json'},
        post: {'Content-Type': 'application/json'},
        put: {'Content-Type': 'application/json'},
        delete: {'Content-Type': 'application/json'},
        head: {},
        patch: {}
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
