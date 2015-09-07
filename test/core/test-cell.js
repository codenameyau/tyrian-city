'use strict';

import chai from 'chai';
import CityCell from '../../public/tyrian-city/core/cell.js';
let assert = chai.assert;


describe('CityCell', () => {

  describe('.constructor()', () => {
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

  describe('.update()', () => {
    it('should update the content of the cell', () => {
      let cell = new CityCell();
      let content = 'hello';
      assert.isNull(cell.content);
      cell.update(content);
      assert.strictEqual(cell.content, content);
    });
  });

  describe('.clear()', () => {
    it('should set the content of the cell to null', () => {
      let cell = new CityCell();
      cell.update('hello');
      assert.isNotNull(cell.content);
      cell.clear();
      assert.isNull(cell.content);
    });
  });

});
