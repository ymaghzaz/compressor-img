const dataURLtoBlob = dataURL => {
  var binary = atob(dataURL.split(",")[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: "image/png" });
};

const getSize = base64 => {
  let fileCompressed = dataURLtoBlob(base64);
  return Math.round(fileCompressed.size / 1000);
};

export default getSize;
