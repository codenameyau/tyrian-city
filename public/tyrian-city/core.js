'use strict';

/********************************************************************
* TyrianCity Core: CityCell
*********************************************************************/
class CityCell {

  constructor(x=0, y=0, content=null) {
    this.position = { x: x, y: y };
    this.content = content;
  }

}


/********************************************************************
* TyrianCity Core: CityMap
*********************************************************************/
class CityMap {

  constructor(length, width, name='Tyrian City') {
    this.length = Number.isInteger(length) ? length : 100;
    this.width = Number.isInteger(width) ? width : 100;
    this.name = name;
  }

}


/********************************************************************
* TyrianCity Core: CityLayer
*********************************************************************/
class CityLayer {

  constructor(map, name='Layer') {
    this.map = (map instanceof CityMap) ? map : new CityMap();
    this.name = name;
    this.grid = null;
    this.resetGrid();
  }

  resetGrid() {
    this.grid = [];
    for (let i=0; i<this.map.length; i++) {
      this.grid.push([]);
      for (let j=0; j<this.map.width; j++) {
        this.grid[i].push(new CityCell(i, j));
      }
    }
  }

  getCell(x, y) {
    return this.grid[x][y];
  }

  updateCell(x, y, content) {
    this.grid[x][y].content = content;
  }

}


/********************************************************************
* TyrianCity Core: Exports
*********************************************************************/
module.exports = {
  CityMap: CityMap,
  CityLayer: CityLayer,
  CityCell: CityCell,
};
