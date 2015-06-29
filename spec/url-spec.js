'use strict';
var  normalizeUrl= require('../index.js');

describe('normalizeUrl', function(){

    it('returns false if not given a string', function(){
        var url1 = normalizeUrl([1,2,3]);
        var url2 = normalizeUrl({url: 'http://google.com/'});
        var url3 = normalizeUrl(372785);

        expect(url1).toBe(false);
        expect(url2).toBe(false);
        expect(url3).toBe(false);
    });

    it('will normalize the url', function(){
        var url1 = normalizeUrl('http://google.com/');
        var url2 = normalizeUrl('http://google.com');
        var url3 = normalizeUrl('https://google.com/');
        var url4 = normalizeUrl('google.com');
        var url5 = normalizeUrl('www.google.com');
        var url6 = normalizeUrl('google.com/some/path/index.js');

        expect(url1).toEqual('http://google.com/');
        expect(url2).toEqual('http://google.com/');
        expect(url3).toEqual('https://google.com/');
        expect(url4).toEqual('http://google.com/');
        expect(url5).toEqual('http://www.google.com/');
        expect(url6).toEqual('http://google.com/some/path/index.js');
    });
});


