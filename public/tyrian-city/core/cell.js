'use strict';


export default class CityCell {

  constructor(x=0, y=0, content=null, layer=null) {
    this.position = { x: x, y: y };
    this.content = content;
    this.layer = layer;
  }

  isFilled() {
    return this.content !== null;
  }

  isEmpty() {
    return this.content === null;
  }

  update(content) {
    this.content = content;
  }

  clear() {
    this.content = null;
  }

}
