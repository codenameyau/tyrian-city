'use strict';

import CityMap from '../core/map.js';
import StreetGenerator from '../generator/street.js';


/********************************************************************
* TyrianCity Main
*********************************************************************/
let size = 4;
let map = new CityMap(size, size);
let streetLayer = map.createLayer('street');
let streetGenerator = new StreetGenerator(streetLayer);
streetGenerator.perimeterPath(0, 0, 3, 3);
console.log(streetLayer.grid);
