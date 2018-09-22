# compressor-img
 [![Version](https://img.shields.io/npm/v/compressor-img.svg)](https://www.npmjs.com/package/compressor-img)
 
 
> Javascript library for image compressor in client side 
  
- [Demo](https://compressor-img.firebaseapp.com)

## Table of contents

- [Getting started](#getting-started)


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

> quality (Number) :   The percentage of image quality it starts from 1 to 100.

> originalImage (base64) : Image in base64 ,  example : "data:image/jpeg;base64,/9j/4RiDRXhpZgAATU0AKgA...".

> fileName (String) :  File Name , example : "imageName.jpg"

> holdCompress (bool)(default value false) : set this variable a true , if you dont want to start compress the image when the class ImageCompressor is instantiated .

