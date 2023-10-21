const { i18n } = require('./i18n.config')
require('dotenv').config();
module.exports = {
    i18n,
    env: {
        API_HOST: process.env.API_HOST,
      },
}
