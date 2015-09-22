'use strict';

var noUtils = require('./');
var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('no-utils', function() {
  describe('.transform', function() {
    it('should remove matching array items', function() {
      var input = [1,2,3,4,5];

      var result = noUtils.transform(input, function(input) {return input === 5;});
      result.length.should.equal(4);
      result.should.not.equal(input);
      result[3].should.equal(4);
    });

    it('should remove matching object values', function() {
      var input = {foo: 5, boo: 6};

      var result = noUtils.transform(input, function(input) {return input === 5;});
      expect(result.foo).to.be.undefined;
      result.boo.should.equal(6);
      result.should.not.equal(input);
    });

    it('should return null for all other matches', function() {
      expect(noUtils.transform(5, function(input) {return input === 5;})).to.be.null;
    });
  });
});
