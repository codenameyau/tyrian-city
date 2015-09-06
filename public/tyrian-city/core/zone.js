'use strict';


export default class CityZone {

  constructor(zone) {
    this.zone = this.allocate(zone);
    this.set = new Set([
        'street',
        'residential',
        'commercial',
      ]);
  }

  allocate(zone) {
    if (this.set.has(zone)) {
      this.zone = zone;
    }
  }

  is(zone) {
    return this.zone === zone;
  }

}
