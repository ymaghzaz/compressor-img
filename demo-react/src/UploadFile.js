import React, { Component } from "react";
import { ImageCompressor, getImageSize } from "./compressor-img";
import { FaUpload } from "react-icons/fa";

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
          holdCompress: false,
          originalImage: reader.result,
          fileName: file.name
        });
        imageCompressor.startCompress();
      };

      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div className="upload-file-container">
        <div className="upload-file-input">
          <label htmlFor="file">
            <div className="upload-type">
              <FaUpload className="icon" />
              <span> Upload File </span>
            </div>
          </label>
          <input
            id="file"
            style={{ display: "none" }}
            type="file"
            onChange={this.handleImageChange}
          />
        </div>
        <div className="display-compressed-image">
          {this.state.sizeOriganleImage &&
            this.state.sizeOriganleImage +
              " kb  -> " +
              this.state.sizeCompressedImage +
              " kb"}
          {this.state.compressedImage && (
            <img src={this.state.compressedImage} />
          )}
        </div>
      </div>
    );
  }
}
export default UploadFile;
