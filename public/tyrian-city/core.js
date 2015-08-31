'use strict';

/********************************************************************
* TyrianCity Core: CityCell
*********************************************************************/
export class CityCell {

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


/********************************************************************
* TyrianCity Core: CityLayer
*********************************************************************/
export class CityLayer {

  constructor(map, name='Layer') {
    this.map = map;
    this.name = name;
    this.grid = null;
    this.createGrid();
  }

  createGrid() {
    this.grid = [];
    for (let i=0; i<this.map.length; i++) {
      this.grid.push([]);
      for (let j=0; j<this.map.width; j++) {
        this.grid[i].push( new CityCell(i, j, null, this) );
      }
    }
  }

  getCell(x, y) {
    return this.grid[x][y];
  }

  updateCell(x, y, content) {
    this.grid[x][y].update(content);
  }

  clearCell(x, y) {
    this.grid[x][y].clear();
  }

}


/********************************************************************
* TyrianCity Core: CityMap
*********************************************************************/
export class CityMap {

  constructor(length, width, name='Tyrian City') {
    this.length = Number.isInteger(length) ? length : 100;
    this.width = Number.isInteger(width) ? width : 100;
    this.name = name;
    this.layers = {};
  }

  getLayer(name) {
    return this.layers[name];
  }

  hasLayer(name) {
    return this.getLayer(name) instanceof CityLayer;
  }

  createLayer(name) {
    if (!this.hasLayer(name)) {
      this.layers[name] = new CityLayer(this, name);
      return this.getLayer(name);
    }
  }

  deleteLayer(name) {
    if (this.hasLayer(name)) {
      delete this.layers[name];
    }
  }

}
