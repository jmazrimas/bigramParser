fs = require('fs');

module.exports = {
  returnFileData: (fileLocation) => {
    var rawData = fs.readFileSync(fileLocation, "utf8");
    // define "words" as anything separated by a space
    //   or a newline
    var processedData = rawData.split("\n").join("").split(" ")
    // this assumes multiple spaces should be treated
    //   as one
    return processedData.filter((x)=>{return x != ""})
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
