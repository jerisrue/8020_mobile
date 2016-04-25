cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-galaxygear/www/galaxygear.js",
        "id": "cordova-galaxygear.GalaxyGear",
        "clobbers": [
            "GalaxyGear"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-galaxygear": "0.0.3"
};
// BOTTOM OF METADATA
});