import * as React from 'react'

import { Grid, GridSize } from '@mui/material'
import { GridWrapper } from 'Types'

const gridWrapper = <T extends object>({
  Component,
  key,
  props,
  disableGrid,
  disableSpacer,
  gridProps,
  spacerProps
}: GridWrapper<T>) => {
  // need to add support for xl and md
  let defaultSize = 7

  // This could cause issues if xs is not a number
  if (gridProps && gridProps['xs'] && typeof gridProps['xs'] === 'number')
    defaultSize = gridProps['xs']

  if (!disableGrid)
    return (
      <>
        <Grid item key={`${key}-grid`} xs={defaultSize as GridSize} {...gridProps}>
          <Component {...props} />
        </Grid>
        {!disableSpacer ? (
          <Grid
            item
            key={`${key}-grid-spacer`}
            // Could def cause issues if not a number
            xs={(12 - defaultSize) as GridSize}
            {...spacerProps}
          ></Grid>
        ) : null}
      </>
    )
  else return <Component {...props} />
}

export default gridWrapper