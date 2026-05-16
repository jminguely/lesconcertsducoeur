'use strict'

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
  const originalWarn = strapi.log.warn.bind(strapi.log)

  strapi.log.warn = (...args) => {
    const message = args[0]

    // Strapi v3 can emit this warning for internal i18n-generated clauses
    // even when user queries are valid. Keep logs clean by filtering only this case.
    if (
      typeof message === 'string' &&
      message.includes("The value of field: 'id', in your where filter, is undefined.")
    ) {
      return
    }

    originalWarn(...args)
  }
}
