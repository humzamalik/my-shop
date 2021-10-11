import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/alert'
import { Button } from '@chakra-ui/button'
import { CloseButton } from '@chakra-ui/close-button'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import Icon from '@chakra-ui/icon'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Box, Stack } from '@chakra-ui/layout'
import React, { useState } from 'react'

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState(false)

    const handler = (e) => {
        e.preventDefault()
        if(true){
            setLoginError(true)
            return
        } else { 
        }
    }


    return (
        <Box
            // maxWidth={800} 
            // margin='auto' 
            // marginTop={5} 
            // padding={10}
            // shadow='2xl'
        >
            <form method='POST' onSubmit={handler}>
                <Stack spacing={3}>
                    <FormControl>
                        <FormLabel htmlFor='email' >Email</FormLabel>
                        <Input
                            isRequired
                            id='email'
                            type='email'
                            placeholder='abc@xyz.com'
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                            />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password' >Password</FormLabel>
                        <InputGroup>
                            <Input
                                isRequired 
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={({target}) => setPassword(target.value)}
                                />
                            <InputRightElement>
                                <Icon 
                                    as={showPassword ? ViewIcon : ViewOffIcon}
                                    onClick={() => setShowPassword(!showPassword)}
                                    />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Alert 
                        status="error"
                        hidden={!loginError}
                    >
                        <AlertIcon/>
                        <AlertDescription>Email or Password is incorrect</AlertDescription>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={() => setLoginError(false)} />
                    </Alert>
                    <br/>
                    <Button
                        alignSelf='center'
                        type='submit'
                        size='md'
                        border="2px"
                        width="200px"
                        borderColor="gray.300"
                        >
                        Login
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default login
