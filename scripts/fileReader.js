fs = require('fs');

module.exports = {
  returnFileData: (fileLocation) => {
    var rawData = fs.readFileSync(fileLocation, "utf8");
    return module.exports.processData(rawData);
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
  },
  fileInputCheck: (args) => {
    // third arg should be file location
    return args[2];
  },
  fileExists: (fileLocation) => {

    var checkIfFileExists = new Promise((resolve, reject) => {
      fs.access(fileLocation, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        resolve(err);
      });
    })

    return checkIfFileExists.then((result) => {
      return !result;
    })

  }
}
