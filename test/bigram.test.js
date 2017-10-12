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
    expect(bigram.returnHistogram(['foo','bar'])['foo bar']).to.be(1);
  });

  it('should return 2 entries for a repeated histogram and only 1 for a single', function() {
    expect(bigram.returnHistogram(['foo','bar','foo', 'bar'])['foo bar']).to.be(2);
    expect(bigram.returnHistogram(['foo','bar','foo', 'bar'])['bar foo']).to.be(1);
  });

  it('should return 3 distinct entries for four words with no repeats', function() {
    var bigramReturn = bigram.returnHistogram(['foo','bar','baz', 'qux']);
    var numberOfEntries = Object.keys(bigramReturn).length;
    expect(numberOfEntries).to.be(3);
  });

  it('should compare strings without case', function() {
    expect(bigram.returnHistogram(['FoO','bar','FOo', 'Bar'])['foo bar']).to.be(2);
    expect(bigram.returnHistogram(['FoO','bar','FOo', 'Bar'])['bar foo']).to.be(1);
  });

  it('should ignore non-letter characters', function() {
    var rawData = "this. has some, punct!uation's in it."
    var cleanedData = ["this","has","some","punct!uation's","in","it"];
    expect(bigram.processData(rawData)).to.eql(cleanedData);
  });

});
