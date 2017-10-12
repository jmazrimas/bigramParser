var fileReader = require ('./scripts/fileReader');
var bigram = require ('./scripts/bigram');
var fileData;

var existingFileLocation = fileReader.fileInputCheck(process.argv);
if (existingFileLocation) {
  fileReader.fileExists(existingFileLocation).then((fileExists) => {
    if (fileExists) {
      fileData = fileReader.returnFileData(existingFileLocation);
      console.log(bigram.returnHistogram(fileData));
    } else {
      console.log("'", existingFileLocation, "' not found. Please provide a valid input.")
    }
  })
} else {
  console.log("No file provided. Please provide a valid input.")
}
