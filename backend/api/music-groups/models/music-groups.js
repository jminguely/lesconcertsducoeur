'use strict'

const _ = require('lodash'); // import lodash

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.name) {
        data.slug = _.kebabCase(data.name);
      }
    },
    async beforeUpdate(params, data) {
      if (data.name) {
        data.slug = _.kebabCase(data.name);
      }
    },
  },
};
