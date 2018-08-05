cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-poynt.Poynt",
    "file": "plugins/cordova-plugin-poynt/www/PoyntPlugin.js",
    "pluginId": "cordova-plugin-poynt",
    "clobbers": [
      "window.Poynt"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-poynt": "0.0.2"
};
// BOTTOM OF METADATA
});