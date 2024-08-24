import express from 'express';
import ffmpeg from 'fluent-ffmpeg';


const app = express();

app.post('/process-video', (req, res) => {
  //we need a body to pass a post request
  //get the path of the input video file from the req body
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if(!inputFilePath||!outputFilePath){
    res.status(400).send("Bad request: Missing file path");
  }

  ffmpeg(inputFilePath)
    .outputOptions("-vf","scale=-1:360") // converting to 360p(found from ffmpeg document)
    .on("end",()=>{
      res.status(200).send("Video Processing is completed");
    })
    .on("error",(err)=>{
      console.log(`An error occured: ${err.message}`);
      res.status(500).send(`Internal server error: ${err.message}`);
    })
    .save(outputFilePath);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `video processing service running at http://localhost:${port}`);
});
