"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageSize = exports.ImageCompressor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _size = require("./size");

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFUALT_SCALE = 70;
var DEFAULT_QUALITY = 70;

var ImageCompressor = function () {
  function ImageCompressor(props) {
    _classCallCheck(this, ImageCompressor);

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

      this.props.onSuccess = function () {};
    }

    if (!props.holdCompress) {
      this.compress();
    }
  }

  /*
      Compress The Image
  */


  _createClass(ImageCompressor, [{
    key: "compress",
    value: function compress() {
      var _this = this;

      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      var img = new Image();
      img.onload = function () {
        var scale = _this.props.scale / 100;
        var width = img.width * scale;
        var height = img.height * scale;

        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        ctx.drawImage(img, 0, 0, width, height);

        var quality = _this.props.quality / 100;

        var output = {
          original: _this.props.originalImage,
          compressed: canvas.toDataURL("image/jpeg", quality)
        };
        _this.props.onSuccess(output);
      };

      img.src = this.props.originalImage;
    }

    // this function will be used if the variable holdCompress is set to true

  }, {
    key: "startCompress",
    value: function startCompress() {
      this.compress();
    }
  }]);

  return ImageCompressor;
}();

exports.ImageCompressor = ImageCompressor;
exports.getImageSize = _size2.default;