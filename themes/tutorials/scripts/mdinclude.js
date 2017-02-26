var kramed = require('kramed');
var regexInclude = /\{\:\ ?include(.*)\ ?\}/g;

/**
 * Markdown include
 *
 * Syntax:
 *   {: include <pathToFile> }
 */

hexo.extend.renderer.register('styles', 'css', function(data, options, callback) {
  return kramed(data.text.replace(regexInclude, 'ttteeeessstt'), callback);
}, true);