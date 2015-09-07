'use strict';

import chai from 'chai';
import CityCell from '../../public/tyrian-city/core/cell.js';
import CityLayer from '../../public/tyrian-city/core/layer.js';
import CityMap from '../../public/tyrian-city/core/map.js';
let assert = chai.assert;


describe('CityLayer', () => {
  let length = 3, width = 4;
  let map = new CityMap(length, width);

  describe('.constructor()', () => {
    let layer = new CityLayer(map);

    it('should always define a CityMap instance for the layer', () => {
      assert.instanceOf(layer.map, CityMap);
    });
  });

  describe('.reset()', () => {
    let layer = new CityLayer(map);

    it('should populate the grid with length x width CityCells', () => {
      assert.strictEqual(layer.grid.length, length);
      assert.strictEqual(layer.grid[0].length, width);
      assert.instanceOf(layer.grid[0][0], CityCell);
    });

    it('should have cells with their correct positions defined', () => {
      for (let i=0; i<length; i++) {
        for (let j=0; j<width; j++) {
          assert.strictEqual(layer.grid[i][j].position.x, i);
          assert.strictEqual(layer.grid[i][j].position.y, j);
        }
      }
    });

    it('should reset the previous grid when called', () => {
      let dummyContent = 'dummy';
      layer.grid[0][0].content = dummyContent;
      assert.strictEqual(layer.grid[0][0].content, dummyContent);
      layer.reset();
      assert.strictEqual(layer.grid[0][0].content, null);
    });
  });

  describe('.getCell()', () => {
    let layer = new CityLayer(map);

    it('should retrieve the cell instance at the given position', () => {
      let cell = layer.getCell(0, 0);
      assert.instanceOf(cell, CityCell);
      assert.strictEqual(cell.content, null);
    });

    it('should have an instance of CityLayer for its layer', () => {
      let cell = layer.getCell(0, 0);
      assert.instanceOf(cell.layer, CityLayer);
    });
  });

  describe('.getCellContent()', () => {
    let layer = new CityLayer(map);

    it('should retrieve the cell content at the given position', () => {
      let cellContent = layer.getCellContent(0, 0);
      assert.strictEqual(cellContent, null);
    });
  });

  describe('.updateCell()', () => {
    let layer = new CityLayer(map);
    let dummyContent = 'dummy';

    it('should set the cell content at the given position', () => {
      let cell = layer.getCell(0, 0);
      layer.updateCell(0, 0, dummyContent);
      assert.strictEqual(cell.content, dummyContent);
    });
  });

});
