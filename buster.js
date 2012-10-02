var config = module.exports;

config.Browsers = {
    libs: [
        "node_modules/culljs/node_modules/underscore/underscore.js",
        "node_modules/culljs/lib/cull.js",
        "node_modules/jquery/tmp/jquery.js"
    ],
    sources: ["lib/*.js"],
    tests: ["test/*.js"]
};
