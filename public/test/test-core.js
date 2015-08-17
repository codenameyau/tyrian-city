'use strict';

var testCore = new PubTest('Core');

/********************************************************************
* TyrianCity Test: cell.js
*********************************************************************/
testCore.testCase(function() {

  testCore.assertTrue(typeof(Cell) === 'function',
    'Unit should be defined as a function constructor');

});

/********************************************************************
* TyrianCity Test: zone.js
*********************************************************************/


/********************************************************************
* TyrianCity Test: layer.js
*********************************************************************/


/********************************************************************
* Test Core: core.js
*********************************************************************/
testCore.testCase(function() {
  var city = new TyrianCity();

  testCore.assertTrue(typeof(TyrianCity) === 'function',
    'TyrianCity should be defined as a function constructor');

});


testCore.results();
