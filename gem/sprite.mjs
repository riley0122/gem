import * as sizeOf from "image-size";

export class sprite {
  /**
   *
   * @param {string} filepath
   */
  constructor(filepath) {
    this.img = filepath;
    sizeOf(filepath, (err, dimensions) => {
      this.width = dimensions.width;
      this.height = dimensions.height;
    });
  }
}
