var fileReader = require ('./scripts/fileReader')
var fileData;
var existingFileLocation = fileReader.fileInputCheck(process.argv);
if (existingFileLocation) {
  fileReader.fileExists(existingFileLocation).then((fileExists) => {
    if (fileExists) {
      
    } else {
      console.log("'", existingFileLocation, "' not found. Please provide a valid input.")
    }
  })
}
