'use strict';

import chai from 'chai';
import { CityMap, CityLayer, CityCell } from '../public/tyrian-city/core.js';
let assert = chai.assert;


/********************************************************************
* TyrianCity Test: CityMap
*********************************************************************/
describe('CityMap', () => {

  describe('constructor', () => {
    let length = 20,
        width = 25,
        name = 'Hello World';
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

    it('should have a map property of instance CityMap', () => {
      let map = new CityMap();
      let layer = new CityLayer(map);
      assert.isTrue(layer.map instanceof CityMap);
    });

    it('should set map to null for non-instances of CityMap', () => {
      let map = 'this is a string not a map';
      let layer = new CityLayer(map);
      assert.isFalse(layer.map instanceof CityMap);
      assert.strictEqual(layer.map, null);
    });

  });

});



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
