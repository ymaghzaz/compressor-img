import { Component, OnInit } from "@angular/core";
import { ImageCompressor, getImageSize } from "compressor-img";
@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.css"]
})
export class UploadFileComponent implements OnInit {
  originalImage: any = null;
  sizeOriganleImage: any = null;
  compressedImage: any = null;
  sizeCompressedImage: any = null;
  constructor() {}

  handleImageChange(event) {
    if (event.target.files.length !== 0) {
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        let imageCompressor = new ImageCompressor({
          onSuccess: response => {
            (this.originalImage = response.original),
              (this.sizeOriganleImage = getImageSize(response.original)),
              (this.compressedImage = response.compressed),
              (this.sizeCompressedImage = getImageSize(response.compressed));
          },
          scale: 70,
          quality: 70,
          holdCompress: false,
          originalImage: reader.result
        });
        imageCompressor.startCompress();
      };

      reader.readAsDataURL(file);
    }
  }
  ngOnInit() {}
}
