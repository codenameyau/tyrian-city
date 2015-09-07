'use strict';


export default class StreetGenerator {

  constructor(layer) {
    this.layer = layer;
  }


  addStreet(x, y) {
    this.layer.updateCell(x, y, 'street');
  }


  swapPositions(x1, y1, x2, y2) {
    // Ensures that path is created regardless of which pair is
    // the start and end coordinates.
    if (x2 < x1) {
      [x1, x2] = [x2, x1];
    }

    if (y2 < y1) {
      [y1, y2] = [y2, y1];
    }

    return [x1, y1, x2, y2];
  }


  straightPath(x1, y1, x2, y2) {
    [x1, y1, x2, y2] = this.swapPositions(x1, y1, x2, y2);

    // Branch path based on start and end positions.
    let verticalPath = (x2 - x1) === 0;
    let horizontalPath = (y2 - y1) === 0;
    let diagonalPath = (x1 === y1 && x2 === y2);

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
    [x1, y1, x2, y2] = this.swapPositions(x1, y1, x2, y2);

    for (let x=x1; x<=x2; x++) {
      for (let y=y1; y<=y2; y++) {
        // If path is in (left or right) or (top or bottom)
        if ((x === x1 || x === x2) || (y === y1 || y === y2)) {
          this.addStreet(x, y);
        }
      }
    }
  }


  circularPath(x, y, radius) {

  }


  intersectionPath(x, y, length) {

  }

}
