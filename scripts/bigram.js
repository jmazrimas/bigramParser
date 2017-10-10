

module.exports = {
  returnHistogram: (fileData) => {
    var histogram = {}
    fileData.forEach((word, i) => {
      var wordAhead = fileData[i+1];
      // there is a word ahead of this one
      if (wordAhead) {
        // downcase both words for comparison
        word = word.toLowerCase();
        wordAhead = wordAhead.toLowerCase();
        histogram[word+" "+wordAhead] = histogram[word+" "+wordAhead] ? histogram[word+" "+wordAhead]+1 : 1
      }
    })
    return histogram
  }
}
