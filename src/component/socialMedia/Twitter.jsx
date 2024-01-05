import React from 'react'

import { ReactComponent as TwitterIcon } from '../../assets/icon/icons8-twitterx-100.svg'
import { IconButton } from '@mui/material'

export const Twitter = (props) => {
  const {width,height} = props
  return (
    <IconButton   href='https://twitter.com/bitjoyCom?t=bR8bT__XuHnYagGbaMraog&s=09&fbclid=IwAR236xGgvzWxHmk9NB1MAUvX1GB-HZs7kAI5ZmazBXaf9AV3wn10bs9v5lU' target='_blank' rel='noopener noreferrer' {... props}>
        <TwitterIcon width={width} height={height}/>
    </IconButton>
  )
}
