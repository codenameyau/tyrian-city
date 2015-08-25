'use strict';


/********************************************************************
* TyrianCity Core: Map
*********************************************************************/
function Map(length, width, name) {
  this.name = name || 'Tyrian City';
  this.length = isNaN(length) ? 200 : length;
  this.width = isNaN(width) ? 200 : width;
}


/********************************************************************
* TyrianCity Core: Layer
*********************************************************************/
function Layer(map, name) {
  this.name = '';
  this.grid = [];
  this.map = map;
  this.newLayer(length, width);
}


/********************************************************************
* TyrianCity Core: Cell
*********************************************************************/
function Cell() {
  this.position = {x: 0, y: 0};
  this.content = null;
}
