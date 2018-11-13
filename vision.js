module.exports = {
visionEngine: function(urlImg, callback)
{
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "vision.json";

// Your Google Cloud Platform project ID
const projectId = 'silicon-badge-222321';


// Creates a client
const client = new vision.ImageAnnotatorClient({
    projectId: projectId,
  });

// Performs label detection on the image file
client
  
  .textDetection(urlImg)
  .then(results => {
    const detections = results[0].textAnnotations;
    // console.log('Text:');
    detections.forEach(text => console.log(text.description));
    callback(detections) ;


  })
  .catch(err => {
    console.error('ERROR:', err);
    return null;
  });
}
}