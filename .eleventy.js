
const cleancss          = require('clean-css')
const moment            = require('moment')

moment.locale('en')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'public': './' })
  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  // minify css filter
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleancss({}).minify(code).styles;
  })

  // inspect objects as JSON
  eleventyConfig.addFilter('jsonify', (data) => {
    return JSON.stringify(data, null, "\t")
  })   
  
  return {
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
