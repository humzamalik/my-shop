import { Button } from '@chakra-ui/button'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Box, Stack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

const SignupForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handler = (e) => {
        e.preventDefault()
        if(password.length < 8){
            setPasswordError(true)
            return
        } else { 
            setPasswordError(false)   
        }
    }


    return (
        <Box>
            <form method='POST' onSubmit={handler}>
                <Stack spacing={3}>
                    <FormControl>
                        <FormLabel htmlFor='firstName' >First Name</FormLabel>
                        <Input
                            isRequired
                            id='firstName'
                            type='text'
                            placeholder='Jhon'
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                            />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='lastname' >Last Name</FormLabel>
                        <Input
                            isRequired
                            id='lastname'
                            type='text'
                            placeholder='Smith'
                            value={lastName}
                            onChange={({target}) => setLastName(target.value)}
                            />
                    </FormControl>
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
                                    as={showPassword ? HiEye : HiEyeOff}
                                    onClick={() => setShowPassword(!showPassword)}
                                    />
                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText color={passwordError ? "red" : "gray"}>
                            Password must be 8 characters long
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='address' >Address</FormLabel>
                        <Input
                            isRequired
                            id='address'
                            type='text'
                            placeholder='e.g. 9452 Walt Whitman Dr. Point Pleasant Beach, NJ 08742'
                            value={address}
                            onChange={({target}) => setAddress(target.value)}
                            />
                    </FormControl>
                    <br/>
                    <Button
                        alignSelf='center'
                        type='submit'
                        size='md'
                        border="2px"
                        width="200px"
                        borderColor="gray.300"
                        >
                        Register
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default SignupForm
