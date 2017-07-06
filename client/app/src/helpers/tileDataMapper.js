// TODO dynamic require is easiest here, but import is pretty

import tile0 from '../data/tiles/tile_0.js'
import tile1 from '../data/tiles/tile_1.js'
import tile2 from '../data/tiles/tile_2.js'
import tile3 from '../data/tiles/tile_3.js'
import tile4 from '../data/tiles/tile_4.js'
import tile5 from '../data/tiles/tile_5.js'
import tile6 from '../data/tiles/tile_6.js'
import tile7 from '../data/tiles/tile_7.js'

const idxToData = {
  0: tile0,
  1: tile1,
  2: tile2,
  3: tile3,
  4: tile4,
  5: tile5,
  6: tile6,
  7: tile7
}

export const getTileData = (idx) => {
  const data = idxToData[idx]
  if (data) {
    return data
  } else {
    console.error(`Tile w/ idx: ${idx} not found! Serving tile 0 data...`)
    return tile0
  }
}
