/*Use the inquirer npm package to get user input.*/
import inquirer from "inquirer";
import qr from "qr-image";
import f from "fs";

inquirer
  .prompt([
   {
    "message": "Type in your URL: ",
    "name": "URL",
    }
    ])
  .then((answers) => {

    /*Use the qr-image npm package to turn the user entered URL into a QR code image.*/
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(f.createWriteStream('qr_img.png'));


    /*Create a txt file to save the user input using the native fs node module.*/
    f.writeFile("url.txt",url,(err) => {
        if (err) throw err;
        console.log('code is generated');
      });
    })
    .catch((error) => {
     if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
     } else {
      // Something else went wrong
     }
    });
