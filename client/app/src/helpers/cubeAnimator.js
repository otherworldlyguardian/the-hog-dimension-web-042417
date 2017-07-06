
import cubeConfig from '../config/cubeConfig.js'
import rotationMapper from './rotationMapper.js'

/* We are using this library (after trying out different options, this was the best because of how it handles accumulating rotations)
 * https://github.com/rstacruz/jquery.transit#readme
 *
 * Given more time, I would make a react component class meant for animation with things like locked() built into the class structure.
 *
 * Cube side indexes are as follows:
 *  front: 0
 *  right: 1
 *   left: 2
 *    top: 3
 * bottom: 4
 *   back: 5
 *
 * If it were unfolded from idx 0 (showing wrap to back):
 *
 *        5
 *        3
 *    5 2 0 1 5
 *        4
 *        5
*/

var $cube = null
export var locked = false

function lock() {
  locked = true
}

function unlock() {
  locked = false
}

export function setCube(jQCube) {
  $cube = jQCube
}

export function rotateCube(startIdx, endIdx) {
  if (locked) return false
  lock()
  const vector = rotationMapper[startIdx][endIdx]
  $cube.transition({
    rotateX: `+=${vector[0]}`,
    rotateY: `+=${vector[1]}`,
    rotateZ: `+=${vector[2]}`,
    duration: 500,
    easing: 'in-out',
    complete: () => unlock()
  });
  return true
}

const tileGroups = [[3, 2, 1, 0], [4, 5, 6, 7]]
const rTileGroups = [[0, 1, 2, 3], [7, 6, 5, 4]]

const tileVectors = [
  [295, 0],
  [295, -295],
  [0, -295],
  [-295, -295]
]

const rTileVectors = [
  [0, -295],
  [295, -295],
  [295, 0],
  [0, 0],
]

// These could be refactored
function unfoldTiles(i = 0) {
  // recursive -- this is our end condition (all tiles are in their place)
  if (i === tileVectors.length) {
    unlock()
    return
  }
  // function iterates through the list of tiles, moving from the current tile index to the end of the list.
  // each time it recurs, it is called with the rest of the list of tiles (excluding the one that it started on for this iteration)
  // e.g. [1, 2, 3, 4] --> [2, 3, 4] --> [3, 4] --> etc.
  // important to remember it is acting on pairs (there are two unfolding tile groups).
  for (let curr = i; curr < tileVectors.length; curr++) {
    $(`#tile-${tileGroups[0][curr]}-wrapper`).transition({
      x: tileVectors[i][0],
      y: tileVectors[i][1],
      duration: 250,
      easing: 'in-out',
    })
    $(`#tile-${tileGroups[1][curr]}-wrapper`).transition({
      x: tileVectors[i][0]*-1,
      y: tileVectors[i][1]*-1,
      duration: 250,
      easing: 'in-out',
      complete: () => {
        if (curr === tileVectors.length-1)
          unfoldTiles(i += 1)
      }
    })
  }
}

function foldTiles(i = 0) {
  // Function is recursive -- this is our end condition (all tiles are in their place)
  if (i === tileVectors.length) {
    resumeCubeAnimation()
    return
  }

  for (let curr = 0; curr <= i ; curr++) {
    $(`#tile-${rTileGroups[0][curr]}-wrapper`).transition({
      x: rTileVectors[i][0],
      y: rTileVectors[i][1],
      duration: 250,
      easing: 'in-out',
    })
    $(`#tile-${rTileGroups[1][curr]}-wrapper`).transition({
      x: rTileVectors[i][0]*-1,
      y: rTileVectors[i][1]*-1,
      duration: 250,
      easing: 'in-out',
      complete: () => {
        if (curr === i)
          foldTiles(i += 1)
      }
    })
  }
}

function resumeCubeAnimation() {
  $(".oscillation-wrapper").addClass("oscillate")
  $('.cube-container').transition({
    transform: `scale(1)`,
    duration: 250,
    easing: 'in-out',
    complete: () => { unlock() }
  })
}

export function flattenCube() {
  if (locked) return
  lock() // is unlocked at the end of unfold tiles
  $(".oscillation-wrapper").removeClass("oscillate")
  $('.cube-container').transition({
    transform: `scale(.35)`,
    duration: 500,
    easing: 'in-out',
    complete: () => unfoldTiles()
  })
}

export function foldCube() {
  if (locked) return
  lock()
  foldTiles()
}
