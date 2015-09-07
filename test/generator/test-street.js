'use strict';

import chai from 'chai';
import CityMap from '../../public/tyrian-city/core/map.js';
import StreetGenerator from '../../public/tyrian-city/generator/street.js';
let assert = chai.assert;


describe('StreetGenerator', () => {
  let size = 6;
  let map = new CityMap(size, size);

  describe('.straightPath()', () => {
    let layer = map.createLayer('street');
    let generateStreet = new StreetGenerator(layer);

    describe('horizontal', () => {
      let x1 = 1, y1 = 1;
      let x2 = 3, y2 = 1;

      let testHorizontalPath = () => {
        assert.isNotNull(layer.getCellContent(1, 1));
        assert.isNotNull(layer.getCellContent(2, 1));
        assert.isNotNull(layer.getCellContent(3, 1));
        assert.isNull(layer.getCellContent(0, 0));
        assert.isNull(layer.getCellContent(1, 2));
        assert.isNull(layer.getCellContent(2, 2));
        assert.isNull(layer.getCellContent(2, 3));
        assert.isNull(layer.getCellContent(3, 2));
        assert.isNull(layer.getCellContent(4, 4));
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
        assert.isNotNull(layer.getCellContent(1, 1));
        assert.isNotNull(layer.getCellContent(1, 2));
        assert.isNotNull(layer.getCellContent(1, 3));
        assert.isNull(layer.getCellContent(0, 0));
        assert.isNull(layer.getCellContent(2, 1));
        assert.isNull(layer.getCellContent(2, 2));
        assert.isNull(layer.getCellContent(2, 3));
        assert.isNull(layer.getCellContent(3, 1));
        assert.isNull(layer.getCellContent(4, 4));
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
        assert.isNotNull(layer.getCellContent(1, 1));
        assert.isNotNull(layer.getCellContent(2, 2));
        assert.isNotNull(layer.getCellContent(3, 3));
        assert.isNull(layer.getCellContent(0, 0));
        assert.isNull(layer.getCellContent(1, 2));
        assert.isNull(layer.getCellContent(2, 1));
        assert.isNull(layer.getCellContent(2, 3));
        assert.isNull(layer.getCellContent(3, 2));
        assert.isNull(layer.getCellContent(4, 4));
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


  describe('.perimeterPath', () => {
    let layer = map.createLayer('street');
    let generateStreet = new StreetGenerator(layer);

    it('should create a perimeter from start to end', () => {
      let x1 = 1, y1 = 1;
      let x2 = 3, y2 = 3;
      generateStreet.perimeterPath(x1, y1, x2, y2);
      assert.isNotNull(layer.getCellContent(1, 1));
      assert.isNotNull(layer.getCellContent(1, 2));
      assert.isNotNull(layer.getCellContent(1, 3));
      assert.isNotNull(layer.getCellContent(3, 1));
      assert.isNotNull(layer.getCellContent(3, 2));
      assert.isNotNull(layer.getCellContent(3, 3));
      assert.isNotNull(layer.getCellContent(1, 1));
      assert.isNotNull(layer.getCellContent(2, 1));
      assert.isNotNull(layer.getCellContent(3, 1));
      assert.isNotNull(layer.getCellContent(1, 3));
      assert.isNotNull(layer.getCellContent(2, 3));
      assert.isNotNull(layer.getCellContent(3, 3));
      assert.isNull(layer.getCellContent(0, 0));
      assert.isNull(layer.getCellContent(2, 2));
      assert.isNull(layer.getCellContent(4, 4));
    });
  });

});
