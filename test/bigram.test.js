var assert = require('assert');
var expect = require('expect.js');
var bigram = require ('../scripts/bigram')

describe('bigram', function() {

  it('should return a blank object if there are no inputs', function() {
    expect(bigram.returnHistogram([])).to.be.empty;
  });

  it('should return a blank object if there is only one word', function() {
    expect(bigram.returnHistogram(['word'])).to.be.empty;
  });

  it('should return a single entry for two words', function() {
    expect(bigram.returnHistogram(['foo','bar'])).to.equal({'foo bar': 1});
  });

});
