

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
  },
  processData: (rawData) => {
    // define "words" as anything separated by a space
    //   or a newline
    var processedData = rawData.split("\n").join("").split(" ")
    // this assumes multiple spaces should be treated
    //   as one, and strips any leading or trailing
    //   punctuation -- so Jims and Jim's will be treated
    //   as different things
    return processedData.map((x)=>{ return x.replace(/^[\d_\W]+|[\d_\W]+$/g, '') })
  }
}
