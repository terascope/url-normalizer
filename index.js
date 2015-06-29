'use strict';
var url = require('url');

module.exports = function normalizeUrl (str){
    if (typeof str !== 'string') {
        return false;
    }
    //adds http:// in front of the string if it does not have it
    var prependUrl = str.toLowerCase().trim().replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
    //parses the url and return sa formatted href which adds the / at the end when appropriate
    return url.parse(prependUrl).href;
};