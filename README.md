# compressor-img
 [![Version](https://img.shields.io/npm/v/compressor-img.svg)](https://www.npmjs.com/package/compressor-img)
 
 
> Javascript library for image compressor in client side 
  
- [Demo](https://compressor-img.firebaseapp.com)

## Table of contents

- [Getting started](#getting-started)
- [Example with React](#example-with-react)
- [Browser support](#browser-support)
- [License](#license)

## Getting started

### Install

```shell
npm install compressor-img
```

### Usage

#### Syntax

```js
 const params= {
          onSuccess: response => {
          },
          scale: 70,
          quality: 70,
          originalImage: "data:image/jpeg;base64,/9j/4RiDRXhpZgAATU0AKgA...",
          fileName: "fileName.jpeg"
        }
 new ImageCompressor(params)
```
**params**
> onSuccess (Function) : Callback after Compress the image. It will pass original file and compressed file .

> scale (Number) : The percentage of image scaling it starts from 1 to 100.

> quality (Number) : The percentage of image quality it starts from 1 to 100.

> originalImage (base64) : Image in base64 ,  example : "data:image/jpeg;base64,/9j/4RiDRXhpZgAATU0AKgA...".

> fileName (String) :  File Name , example : "imageName.jpg"

> holdCompress (bool)(default value false) : set this variable a true , if you dont want to start compress the image when the class ImageCompressor is instantiated [example](#example-using-holdcompress-params) .

#### Example using holdcompress params
```js
 const params= {
          onSuccess: response => {
          },
          scale: 70,
          quality: 70,
          originalImage: "data:image/jpeg;base64,/9j/4RiDRXhpZgAATU0AKgA...",
          fileName: "fileName.jpeg",
          holdCompress:true
        };
const instanceImageCompressor = new ImageCompressor(params);
instanceImageCompressor.startCompress();

```

## Example with React  
 
```js
import React, { Component } from "react";
import { ImageCompressor, getImageSize } from "compressor-img";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalImage: null,
      sizeOriganleImage: null,
      compressedImage: null,
      sizeCompressedImage: null
    };
  }

  handleImageChange = event => {
    event.preventDefault();
    const { documentKey } = this.props;

    if (event.target.files.length !== 0) {
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        let imageCompressor = new ImageCompressor({
          onSuccess: response => {
            this.setState({
              originalImage: response.original,
              sizeOriganleImage: getImageSize(response.original),
              compressedImage: response.compressed.base64,
              sizeCompressedImage: getImageSize(response.compressed.base64)
            });
            console.log("compressed");
            console.log(response);
          },
          scale: 70,
          quality: 70,
          originalImage: reader.result,
          fileName: file.name
        });
        
      };

      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div className="upload-file-container">
          <input
            id="file"
            type="file"
            onChange={this.handleImageChange}
          />
        <div className="display-compressed-image">
          {this.state.sizeOriganleImage &&
            this.state.sizeOriganleImage +
              " kb  -> " +
              this.state.sizeCompressedImage +
              " kb"}
          {this.state.compressedImage && (
            <img
              style={{
                maxWidth: "600px",
                maxheight: "400px"
              }}
              src={this.state.compressedImage}
            />
          )}
        </div>
      </div>
    );
  }
}
export default UploadFile;


```
[⬆ back to top](#table-of-contents)


## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
 
 

## License

[MIT](https://opensource.org/licenses/MIT) © [youssef maghzaz](https://github.com/ysfmag)

[⬆ back to top](#table-of-contents)
