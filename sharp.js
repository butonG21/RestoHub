const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceFolder = path.resolve(__dirname, 'src/public/images');
const destinationFolder = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder);
}

fs.readdirSync(sourceFolder).forEach((image) => {
  const imagePath = path.join(sourceFolder, image);

  // Check if the file is a PNG or JPG image
  if (image.match(/\.(png|jpg)$/i)) {
    // Modify the image only if it's a PNG or JPG
    sharp(imagePath)
      .resize(800)
      .toFile(path.resolve(destinationFolder, `${path.parse(image).name}-large.jpg`));

    sharp(imagePath)
      .resize(480)
      .toFile(path.resolve(destinationFolder, `${path.parse(image).name}-small.jpg`));
  }
});
