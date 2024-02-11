import React from 'react'

import { ReactComponent as TwitterIcon } from '../../assets/icon/icons8-twitterx-100.svg'
import { IconButton } from '@mui/material'

export const Twitter = (props) => {
  const {width,height} = props
  return (
    <IconButton   href='https://x.com/BitjoyCoin?t=xjqHhOa7fj_hFzFtxtIYBw&s=09' target='_blank' rel='noopener noreferrer' {... props}>
        <TwitterIcon width={width} height={height}/>
    </IconButton>
  )
}
