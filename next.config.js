const { i18n } = require('./next-i18next.config')

module.exports = ({
    env: {
      roleGuest: 255,
      roleCommon: 250,
      roleAdmin: 150,
      roleSpecial: 10,
      roleMaster: 0,
    },
    i18n,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/tests',
          permanent: false,
        },
      ]
    },
})
