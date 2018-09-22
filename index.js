import getImageSize from "./size";

const DEFUALT_SCALE = 70;
const DEFAULT_QUALITY = 70;
class ImageCompressor {
  props = {};

  constructor(props) {
    this.props = props;
    this.props.fileName = props.fileName || `${Date.now().toString}.jpg`;
    this.props.scale = props.scale || DEFUALT_SCALE;
    this.props.quality = props.scale || DEFUALT_SCALE;
    if (!props.originalImage) {
      throw "ImageCompressor : Please set originalImage";
    }

    if (!props.onSuccess) {
      throw "ImageCompressor :  Please Set OnSucess function to get the compressed image";

      this.props.onSuccess = () => {};
    }

    if (!props.holdCompress) {
      this.compress();
    }
  }

  /*
      Compress The Image
  */
  compress() {
    // Recreate Canvas Element
    let canvas = document.createElement("canvas");

    // Set Canvas Context
    let ctx = canvas.getContext("2d");

    // Create New Image
    let img = new Image();
    img.onload = () => {
      // Image Size After Scaling
      let scale = this.props.scale / 100;
      let width = img.width * scale;
      let height = img.height * scale;

      // Set Canvas Height And Width According to Image Size And Scale
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);

      ctx.drawImage(img, 0, 0, width, height);

      // Quality Of Image
      let quality = this.props.quality ? this.props.quality / 100 : 1;

      // If all files have been proceed
      let base64 = canvas.toDataURL("image/jpeg", quality);
      let lastDot = this.props.fileName.lastIndexOf(".");
      this.props.fileName = this.props.fileName.substr(0, lastDot) + ".jpeg";
      const output = {
        original: this.props.originalImage, // set the orginale
        compressed: {
          base64: base64,
          name: this.props.fileName,
          type: "image/jpeg"
        }
      };
      this.props.onSuccess(output);
    };

    img.src = this.props.originalImage;
  }

  // this function will be used if the variable holdCompress is set to true
  startCompress() {
    this.compress();
  }
}

export { ImageCompressor, getImageSize };
