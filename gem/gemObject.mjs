import { pos } from "./pos.mjs";
import { sprite } from "./sprite.mjs";

export class gemObject {
  /**
   * objects for gem
   * @param {pos} position
   * @param {string} name
   * @param {sprite} sprite
   */
  constructor(position, name, sprite) {
    this.position = position;
    this.name = name;
    this.sprite = sprite;
  }
}
