'use strict';

var testCore = new PubTest('Core');

/********************************************************************
* TyrianCity Test: Map
*********************************************************************/
testCore.testCase(function() {

  testCore.assertTrue(typeof(Map) === 'function',
    'Map should be defined as a function constructor');

  testCore.testCase(function() {
    var length = 100;
    var width = 200;
    var map = new Map(length, width);
    testCore.assertEqual(map.length, length,
      'Map should be initialized with the correct length');

    testCore.assertEqual(map.width, width,
      'Map should be intialized with the correct width');
  });

});


/********************************************************************
* TyrianCity Test: Layer
*********************************************************************/
testCore.testCase(function() {

  testCore.assertTrue(typeof(Layer) === 'function',
    'Layer should be defined as a function constructor');

});

/********************************************************************
* TyrianCity Test: Cell
*********************************************************************/
testCore.testCase(function() {

  testCore.assertTrue(typeof(Cell) === 'function',
    'Cell should be defined as a function constructor');

});


testCore.results();
