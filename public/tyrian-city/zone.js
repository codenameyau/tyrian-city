'use strict';

/********************************************************************
* TyrianCity Zone: CityZone
*********************************************************************/
export class CityZone {

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

  isStreet() {
    return this.zone === 'street';
  }

}
