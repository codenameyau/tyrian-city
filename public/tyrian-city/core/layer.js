'use strict';

import CityCell from './cell.js';


export default class CityLayer {

  constructor(map, name='Layer') {
    this.map = map;
    this.name = name;
    this.grid = null;
    this.resetGrid();
  }

  resetGrid() {
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

  getCellContent(x, y) {
    return this.grid[x][y].content;
  }

  updateCell(x, y, content) {
    this.grid[x][y].update(content);
  }

  clearCell(x, y) {
    this.grid[x][y].clear();
  }

}
