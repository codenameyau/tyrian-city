'use strict';


export default class StreetGenerator {

  constructor(layer) {
    this.layer = layer;
  }


  addStreet(x, y) {
    this.layer.updateCell(x, y, 'street');
  }


  straightPath(x1, y1, x2, y2) {
    // Swap values to ensure path symmetry.
    if (x2 < x1) {
      [x1, x2] = [x2, x1];
    }

    if (y2 < y1) {
      [y1, y2] = [y2, y1];
    }

    // Branch path based on start and end positions.
    let verticalPath = (x2 - x1) === 0;
    let horizontalPath = (y2 - y1) === 0;
    let diagonalPath = (x2 > x1 && y2 > y1);

    if (verticalPath) {
      for (let y=y1; y<=y2; y++) {
        this.addStreet(x1, y);
      }
    }

    else if (horizontalPath) {
      for (let x=x1; x<=x2; x++) {
        this.addStreet(x, y1);
      }
    }

    else if (diagonalPath) {
      for (let i=x1; i<=x2; i++) {
        this.addStreet(i, i);
      }
    }
  }


  perimeterPath(x1, y1, x2, y2) {

  }


  circularPath(x, y, radius) {

  }


  tPath(x, y, extension) {

  }


  xPath(x, y, extension) {

  }

}
