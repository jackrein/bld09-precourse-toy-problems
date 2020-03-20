/*
    Given a matrix rotate it 90 degrees
    in a clockwise direction.

    ex: rotateMatrix([[1, 2, 3],    [[7, 4, 1],
                      [4, 5, 6],     [8, 5, 2],
                      [7, 8, 9]]) => [9, 6, 3]]
*/

const rotateMatrix = (matrix) => {
  let copy = matrix.slice();
    for (let i = 0; i < matrix.length; i++) {
      // Map each row entry to its rotated value
      let row = matrix[i].map(function(x, j) {
        return copy[(matrix.length - 1) - j][i];
      });
      matrix[i] = row;
    }
  return matrix;
};

//Do not change this line or function name
module.exports = rotateMatrix;

//Run this line to check your answer
//npm test ./rotate-matrix/rotateMatrix.test.js