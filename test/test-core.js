'use strict';

import chai from 'chai';
import { CityCell, CityMap, CityLayer } from '../public/tyrian-city/core.js';
let assert = chai.assert;


/********************************************************************
* TyrianCity Test: CityCell
*********************************************************************/
describe('CityCell', () => {

  describe('constructor', () => {
    it('should set the default position and content if no args', () => {
      let cell = new CityCell();
      assert.strictEqual(cell.position.x, 0);
      assert.strictEqual(cell.position.y, 0);
      assert.strictEqual(cell.content, null);
    });

    it('should set the position if arguments are passed', () => {
      let x = 2, y = 3, content = 'super saiyan';
      let cell = new CityCell(x, y, content);
      assert.strictEqual(cell.position.x, x);
      assert.strictEqual(cell.position.y, y);
      assert.strictEqual(cell.content, content);
    });
  });

});


/********************************************************************
* TyrianCity Test: CityMap
*********************************************************************/
describe('CityMap', () => {

  describe('constructor', () => {
    let length = 20, width = 25, name = 'Hello World';
    let map = new CityMap(length, width, name);

    it('should set the correct length of the CityMap', () => {
      assert.strictEqual(map.length, length);
    });

    it('should set the correct width of the CityMap', () => {
      assert.strictEqual(map.width, width);
    });

    it('should set the correct name of the CityMap', () => {
      assert.strictEqual(map.name, name);
    });
  });

});


/********************************************************************
* TyrianCity Test: CityLayer
*********************************************************************/
describe('CityLayer', () => {

  describe('constructor', () => {
    let name = 'Demo Layer';
    let map = new CityMap(4, 4);
    let layer = new CityLayer(map, name);

    it('should have a define the properties of the layer', () => {
      assert.isTrue(layer.map instanceof CityMap);
      assert.strictEqual(layer.name, name);
    });
  });

  describe('.resetGrid()', () => {
    let length = 3, width = 4;
    let map = new CityMap(length, width);
    let layer = new CityLayer(map);

    it('should populate the grid with length x width CityCells', () => {
      assert.strictEqual(layer.grid.length, length);
      assert.strictEqual(layer.grid[0].length, width);
      assert.isTrue(layer.grid[0][0] instanceof CityCell);
    });

    it('should have cells with their x and y positions defined', () => {
      for (let i=0; i<length; i++) {
        for (let j=0; j<width; j++) {
          assert.strictEqual(layer.grid[i][j].position.x, i);
          assert.strictEqual(layer.grid[i][j].position.y, j);
        }
      }
    });

    it('should reset the previous grid', () => {
      let dummyContent = 'dummy';
      layer.grid[0][0].content = dummyContent;
      assert.strictEqual(layer.grid[0][0].content, dummyContent);
      layer.resetGrid();
      assert.strictEqual(layer.grid[0][0].content, null);
    });
  });

});
