'use strict';

import chai from 'chai';
import CityMap from '../../public/tyrian-city/core/map.js';
import StreetGenerator from '../../public/tyrian-city/generator/street.js';
let assert = chai.assert;


describe('StreetGenerator', () => {
  let size = 5;
  let map = new CityMap(size, size);
  let layer = map.createLayer('street');
  let generateStreet = new StreetGenerator(layer);

  describe('.constructor()', () => {
    it('should create a property called layer', () => {
      assert.property(generateStreet, 'layer');
    });
  });

  describe('.straightPath()', () => {

    describe('horizontal', () => {
      let x1 = 1, y1 = 1;
      let x2 = 3, y2 = 1;

      let testHorizontalPath = () => {
        assert.isNotNull(layer.getCell(1, 1).content);
        assert.isNotNull(layer.getCell(2, 1).content);
        assert.isNotNull(layer.getCell(3, 1).content);
        assert.isNull(layer.getCell(0, 0).content);
        assert.isNull(layer.getCell(1, 2).content);
        assert.isNull(layer.getCell(2, 2).content);
        assert.isNull(layer.getCell(2, 3).content);
        assert.isNull(layer.getCell(3, 2).content);
        assert.isNull(layer.getCell(4, 4).content);
      };

      it('should create a path filled with a street', () => {
        layer.reset();
        generateStreet.straightPath(x1, y1, x2, y2);
        testHorizontalPath();
      });

      it('should work for the reverse coordinates', () => {
        layer.reset();
        generateStreet.straightPath(x2, y2, x1, y1);
        testHorizontalPath();
      });
    });

    describe('vertical', () => {
      let x1 = 1, y1 = 1;
      let x2 = 1, y2 = 3;

      let testVerticalPath = () => {
        assert.isNotNull(layer.getCell(1, 1).content);
        assert.isNotNull(layer.getCell(1, 2).content);
        assert.isNotNull(layer.getCell(1, 3).content);
        assert.isNull(layer.getCell(0, 0).content);
        assert.isNull(layer.getCell(2, 1).content);
        assert.isNull(layer.getCell(2, 2).content);
        assert.isNull(layer.getCell(2, 3).content);
        assert.isNull(layer.getCell(3, 1).content);
        assert.isNull(layer.getCell(4, 4).content);
      };

      it('should create a path filled with a street', () => {
        layer.reset();
        generateStreet.straightPath(x1, y1, x2, y2);
        testVerticalPath();
      });

      it('should work for the reverse coordinates', () => {
        layer.reset();
        generateStreet.straightPath(x2, y2, x1, y1);
        testVerticalPath();
      });
    });

    describe('diagonal', () => {
      let x1 = 1, y1 = 1;
      let x2 = 3, y2 = 3;

      let testDiagonalPath = () => {
        assert.isNotNull(layer.getCell(1, 1).content);
        assert.isNotNull(layer.getCell(2, 2).content);
        assert.isNotNull(layer.getCell(3, 3).content);
        assert.isNull(layer.getCell(0, 0).content);
        assert.isNull(layer.getCell(1, 2).content);
        assert.isNull(layer.getCell(2, 1).content);
        assert.isNull(layer.getCell(2, 3).content);
        assert.isNull(layer.getCell(3, 2).content);
        assert.isNull(layer.getCell(4, 4).content);
      };

      it('should create a path filled with a street', () => {
        layer.reset();
        generateStreet.straightPath(x1, y1, x2, y2);
        testDiagonalPath();
      });

      it('should work for the reverse coordinates', () => {
        layer.reset();
        generateStreet.straightPath(x2, y2, x1, y1);
        testDiagonalPath();
      });
    });
  });

});
