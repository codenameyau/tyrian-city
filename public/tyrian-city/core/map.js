'use strict';

import CityLayer from './layer.js';


export default class CityMap {

  constructor(length, width, name='Tyrian City') {
    this.length = Number.isInteger(length) ? length : 100;
    this.width = Number.isInteger(width) ? width : 100;
    this.name = name;
    this.layers = {};
  }


  getLayer(name) {
    return this.layers[name];
  }


  hasLayer(name) {
    return this.getLayer(name) instanceof CityLayer;
  }


  createLayer(name) {
    if (!this.hasLayer(name)) {
      this.layers[name] = new CityLayer(this, name);
      return this.getLayer(name);
    }
  }


  deleteLayer(name) {
    if (this.hasLayer(name)) {
      delete this.layers[name];
    }
  }

}
