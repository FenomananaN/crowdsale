import React from 'react'

import { ReactComponent as TelegramIcon } from '../../assets/icon/icons8-telegram-100.svg'
import { IconButton } from '@mui/material'

export const Telegram = (props) => {
  const {width,height} = props
  return (
    <IconButton href='https://t.me/BitjoyGroup?fbclid=IwAR10Hn1L1eBzo5HbwV_HYKxrpvDifV7DAhGnT-AA3X22f1LEWuQy6cqUNUA' target='_blank' rel='noopener noreferrer' {... props}>
        <TelegramIcon width={width} height={height}/>
    </IconButton>
  )
}