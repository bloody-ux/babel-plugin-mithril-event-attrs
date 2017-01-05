'use strict'

var mapping = require('./events-mapping');

module.exports = function() {
  return {
    visitor: {
      JSXAttribute: function(node) {
        if (node.node.name.name in mapping) {
          node.node.name.name = mapping[node.node.name.name]
        }
      }
    }
  }
}