var assert = require('assert');
var expect = require('expect.js');
var fileReader = require ('../scripts/fileReader')

describe('fileReader', function() {

  it('should ignore non-letter characters', function() {
    var rawData = "this. has some, punct!uation's in it."
    var cleanedData = ["this","has","some","punct!uation's","in","it"];
    expect(fileReader.processData(rawData)).to.eql(cleanedData);
  });

})
