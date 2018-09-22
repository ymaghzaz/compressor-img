import getImageSize from "./size";

const DEFUALT_SCALE = 70;
const DEFAULT_QUALITY = 70;
class ImageCompressor {
  constructor(props) {
    if (!props) {
      throw "ImageCompressor : Please Set The Requirement Properties : [ originalImage , onSuccess ]";
    }
    this.props = props;
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
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    let img = new Image();
    img.onload = () => {
      let scale = this.props.scale / 100;
      let width = img.width * scale;
      let height = img.height * scale;

      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      ctx.drawImage(img, 0, 0, width, height);

      let quality = this.props.quality / 100;

      const output = {
        original: this.props.originalImage,
        compressed: canvas.toDataURL("image/jpeg", quality)
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
