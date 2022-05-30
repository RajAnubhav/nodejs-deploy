const Jimp = require('jimp') ;
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();// parsing the json object to it
const cors = require('cors')
app.use(cors());//so that we can make api request to our own localhost
app.listen(3001, (req, res) => {
    console.log("App is runnign on port 3001")
})
// logic

app.post('/', jsonParser, async (req, res) => {
    const data = req.body;
    console.log(data)
    
    // Reading image
    const image = await Jimp.read('./img/background.png');
    const w=image.m
    const photo=await (await Jimp.read('./img/fog.png')).resize(70,90)
   // Defining the text font
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    // image.print(font, 200, 200, data.text);
    // image.contain()
   
        image.print(
          font,
          0,
          0,
          {
            text: data.text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
          },
          600,
          450
        ); // prints 'Hello world!' on an image, middle and center-aligned, when x = 0 and y = 0
   
    //     image.print(
    //       font,
    //       20,
    //       20,
    //       {
    //         text: data.text2,
    //         alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
    //         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    //       },
    //       600,
    //       450
    // ); 
    // this will combine two images in one
     image.composite(photo,500,70)
   // Writing image after processing
   await image.writeAsync('./resources/textOverlay.png');


    console.log("Image is processed succesfully");
    res.sendFile('C:/Users/harsh/Desktop/Programs/Node_Workspace/new/server/resources/textOverlay.png')
})
// async function textOverlay() {
//    // Reading image
//    const image = await Jimp.read('./img/background.png');
//    // Defining the text font
//    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
//    image.print(font, 200, 200, 'Harshit Mishra');
//    // Writing image after processing
//    await image.writeAsync('./resources/textOverlay.png');
// }

// textOverlay();
// console.log("Image is processed succesfully");