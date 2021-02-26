import React from 'react'

import { Stack } from './components'

export default function App() {
  return (
    <div>
      {[...Array(100).keys()].map((i) => (
        // The Stack which calls functions for margin and more seems faster and cleaner on the DOM rendering.
        <Stack key={i} gap="MD" direction="column" p="SM">
          <span>AAA</span>
          <span>BBB</span>
          <span>CCC</span>
          <span>DDD</span>
        </Stack>

        // The VanillaStack which using css variables and data attributes seems slower, probably from adding the extra attributes into DOM
        // <VanillaStack key={i} gap="MD" direction="column" p="SM">
        //   <span>AAA</span>
        //   <span>BBB</span>
        //   <span>CCC</span>
        //   <span>DDD</span>
        // </VanillaStack>
      ))}
    </div>
  )
}
