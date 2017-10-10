fs = require('fs');

module.exports = {
  parseInputFile: () => {

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
