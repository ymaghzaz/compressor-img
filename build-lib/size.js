"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataURLtoBlob = function dataURLtoBlob(dataURL) {
  var binary = atob(dataURL.split(",")[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: "image/png" });
};

var getSize = function getSize(base64) {
  var fileCompressed = dataURLtoBlob(base64);
  return Math.round(fileCompressed.size / 1000);
};

exports.default = getSize;