const loaderUtils = require('loader-utils');

function loadHmr(file) {
    return `
        var component = require(${file});
        var Vue = require('vue');
        module.exports = component;
        
        /* hot reload */
        if (module.hot) {
            (function() {
                var hotAPI = require('vue-hot-reload-api');
                hotAPI.install(require('vue'), false);
                if (!hotAPI.compatible) {
                    return;
                }
                
                if (!module.hot.data) {
                    hotAPI.createRecord(${file}, component.default);
                }
                
                module.hot.accept(${file}, function() {
                    var newComponent = require(${file});
                    hotAPI.reload(${file}, newComponent.default);
                });
            })();
        }
    `;

}


module.exports = function load() {
};
module.exports.pitch = function pitch(remainingRequest) {
    const file = loaderUtils.stringifyRequest(this, '!!' + remainingRequest);
    const isProduction = this.minimize || process.env.NODE_ENV === 'production';

    if (this.cacheable) {
        this.cacheable();
    }

    if (isProduction) {
        return `module.exports = require(${file});`;
    }

    return loadHmr(file);
};