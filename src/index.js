const eslint = require('./eslint');

module.exports = {
  configs: {
    lint: eslint,
  }
};

exports.prettier = require('./prettier')
