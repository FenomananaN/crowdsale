import { Box, Container, Paper , Grid, Stack, InputAdornment, Typography, Divider, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'


import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver }from '@hookform/resolvers/yup'
import { ConnectWalletButton, FormInput, ShowError } from '../component'
import { useAdminContext, useStateContext } from '../context'
import { LockOutlined, Person } from '@mui/icons-material'
import { identifiant } from '../identifiant'


const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Please enter username"),
      //.min(1,"shouldn't be zero"),
    password: Yup.string()
      .required("please enter password")
  })


export const Login = () => {
    
    const {login,walletOwner} = useAdminContext()
    const {address} = useStateContext()

    const id = identifiant 

    const [error,setError] = useState(false)
    const [errorMessage, setErrorMessage]= useState('')

    const methods = useForm({
        resolver:yupResolver(validationSchema)
    })

    const {handleSubmit,formState: { errors }} = methods

    const onSubmit = (data) => {
        if( data.username === id.username && data.password === id.password){
            login(true)
        }
        else {
            setErrorMessage('Mauvais mot de passe ou username')
            setError(true)
        }
    }

    useEffect(()=>{
        if(address !== walletOwner && address !== undefined){
            setErrorMessage('Only Wallet Owner allowed')
            setError(true)
            //login(false)
        }

        else if(address === walletOwner && address){
            login(true)
        }

        console.log(address)
        console.log(walletOwner)

    },[address])

    return (
        <>
        <ShowError open={error} setOpen={setError} message={errorMessage}/>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', }}>
            <Grid container>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{
                        backgroundColor: '#161c29',
                        p:3,
                        marginY:3,
                        marginX:{xs:1,md:3},
                    }}>
                        <Typography variant='h5'>ADMIN BITJOY</Typography>
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack my={1} spacing={1}>
                                    <FormInput 
                                        name='username' label=''  
                                        error={errors?.username} 
                                        helperText={errors?.username?.message} 
                                        size='small'
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <Person style={{fill: errors?.username && '#f44336'}}/>
                                            </InputAdornment>
                                            ),
                                    }}/>

                                    <FormInput 
                                        name='password' label=''  
                                        error={errors?.password} 
                                        helperText={errors?.password?.message}
                                        type='password'
                                        size='small'
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlined style={{fill: errors?.password && '#f44336'}}/>
                                            </InputAdornment>
                                            ),
                                    }}/>

                                    <Button variant='contained' type='submit'>Connect</Button>

                                </Stack>
                            </form>
                        </FormProvider>

                        <Divider>
                            <Typography> Or </Typography>
                        </Divider>

                        <Box display={'flex'} justifyContent={'center'}>
                            <ConnectWalletButton/>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
