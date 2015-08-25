'use strict';

var testCity = new PubTest('City');

/********************************************************************
* TyrianCity Test: City
*********************************************************************/
testCity.testCase(function() {
  var city = new TyrianCity();

  testCity.assertTrue(typeof(TyrianCity) === 'function',
    'TyrianCity should be defined as a function constructor');

});


testCity.results();
