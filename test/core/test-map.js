'use strict';

import chai from 'chai';
import CityLayer from '../../public/tyrian-city/core/layer.js';
import CityMap from '../../public/tyrian-city/core/map.js';
let assert = chai.assert;


/********************************************************************
* TyrianCity Test: CityMap
*********************************************************************/
describe('CityMap', () => {
  let length = 4, width = 5, name = 'Test Map';
  let layerName = 'test';

  describe('constructor', () => {
    let map = new CityMap(length, width, name);

    it('should set the properties of the CityMap', () => {
      assert.strictEqual(map.length, length);
      assert.strictEqual(map.width, width);
      assert.strictEqual(map.name, name);
    });
  });

  describe('.createLayer()', () => {
    let map = new CityMap(length, width, name);
    let layer = map.createLayer(layerName);

    it('should create a new CityLayer instance inside layers', () => {
      assert.instanceOf(layer, CityLayer);
      assert.property(map.layers, layerName);
    });
  });

  describe('.hasLayer()', () => {
    let map = new CityMap(length, width, name);
    map.createLayer(layerName);

    it('should return whether or not the map has the layer', () => {
      assert.isTrue(map.hasLayer(layerName));
      assert.isFalse(map.hasLayer('hallo'));
    });
  });

  describe('.deleteLayer()', () => {
    let map = new CityMap(length, width, name);
    map.createLayer(layerName);
    assert.isTrue(map.hasLayer(layerName));

    it('should delete the defined layer for the map', () => {
      map.deleteLayer(layerName);
      assert.isFalse(map.hasLayer(layerName));
    });
  });

});
