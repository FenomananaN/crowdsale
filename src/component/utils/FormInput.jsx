import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export const FormInput = (props) => {
    const {control} = useFormContext()
    const {name,label} = props
  return (
    <Controller
        render={({field})=>(
            <TextField label={label} {...field} {...props}/>
        )}
        name={name}
        control={control}
        fullWidth={true}
    />
  )
}