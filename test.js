'use strict';

var noUtils = require('./');
var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('no-utils', function() {
  describe('.transform', function() {
    it('should remove matching array items', function() {
      var input = [1,2,3,4,5];

      noUtils.transform(input, function(input) {return input === 5;});
      input.length.should.equal(4);
      input.should.equal(input);
      input[3].should.equal(4);
    });

    it('should remove matching object values', function() {
      var input = {foo: 5, boo: 6};

      noUtils.transform(input, function(input) {return input === 5;});
      expect(input.foo).to.be.undefined;
      input.boo.should.equal(6);
    });

    it('should return null for all other matches', function() {
      expect(noUtils.transform(5, function(input) {return input === 5;})).to.be.null;
    });
  });
});
