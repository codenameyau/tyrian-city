'use strict';

import CityMap from '../core/map.js';
import * as generateStreet from '../generator/street.js';

/********************************************************************
* TyrianCity Main
*********************************************************************/
let size = 4;
let map = new CityMap(size, size);
let streetLayer = map.createLayer('street');

generateStreet.perimeter(streetLayer);

// console.log(streetLayer.grid);
