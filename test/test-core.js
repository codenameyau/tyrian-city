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
* TyrianCity Test: CityLayer
*********************************************************************/
describe('CityLayer', () => {
  let length = 3, width = 4;

  describe('constructor', () => {
    let map = new CityMap(length, width);
    let layer = new CityLayer(map);

    it('should always define a CityMap instance for the layer', () => {
      assert.isTrue(layer.map instanceof CityMap);
    });
  });

  describe('.createGrid()', () => {
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
      layer.createGrid();
      assert.strictEqual(layer.grid[0][0].content, null);
    });
  });

  describe('.getCell()', () => {
    let map = new CityMap(length, width);
    let layer = new CityLayer(map);

    it('should retrieve the cell content at the given position', () => {
      let cell = layer.getCell(0, 0);
      assert.isTrue(cell instanceof CityCell);
      assert.strictEqual(cell.content, null);
    });
  });

  describe('.updateCell()', () => {
    let map = new CityMap(length, width);
    let layer = new CityLayer(map);
    let dummyContent = 'dummy';

    it('should set the cell content at the given position', () => {
      let cell = layer.getCell(0, 0);
      layer.updateCell(0, 0, dummyContent);
      assert.strictEqual(cell.content, dummyContent);
    });
  });

});


/********************************************************************
* TyrianCity Test: CityMap
*********************************************************************/
describe('CityMap', () => {

  describe('constructor', () => {
    let length = 4, width = 5, name = 'Test Map';
    let map = new CityMap(length, width, name);

    it('should set the properties of the CityMap', () => {
      assert.strictEqual(map.length, length);
      assert.strictEqual(map.width, width);
      assert.strictEqual(map.name, name);
    });

    it('should have an interface to access layers', () => {

    });

  });

});
