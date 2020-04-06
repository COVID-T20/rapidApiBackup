(function (global, factory) {
    'use strict';

    /* Use AMD */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return new (factory(global, global.document))();
        })
    }

    /* Use CommonJS */
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = new (factory(global, global.document))();
    }

    /* Use Browser */
    else {
        global.configEnvironment = new (factory(global, global.document))();
    }
})
typeof window !== 'undefined' ? window : this, function (w, d) {
    var configEnvironment = function () {
        return {
            om_Environment: 'DEV',
            om_jokeApiUrl: 'yo'
        };
    };
    return configEnvironment;
}