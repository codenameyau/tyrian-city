'use strict';


/********************************************************************
* TyrianCity Core: CityMap
*********************************************************************/
class CityMap {

  constructor(length, width, name='Tyrian City') {
    this.length = Number.isInteger(length) ? length : 200;
    this.width = Number.isInteger(width) ? width : 200;
    this.name = name;
  }

}


/********************************************************************
* TyrianCity Core: CityLayer
*********************************************************************/
class CityLayer {

  constructor(map, name='Layer') {
    this.map = (map instanceof CityMap) ? map : null;
    this.name = name;
    this.grid = [];
  }

  initializeGrid() {
    for (let i=0; i<this.map.length; i++) {
      this.grid.push([]);
      for (let j=0; i<this.map.width; j++) {
        this.grid[i].push([null]);
      }
    }
  }

}


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
* TyrianCity Core: Exports
*********************************************************************/
module.exports = {
  CityMap: CityMap,
  CityLayer: CityLayer,
  CityCell: CityCell,
};
