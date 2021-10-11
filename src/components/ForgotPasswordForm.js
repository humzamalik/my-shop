import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/alert'
import { Button } from '@chakra-ui/button'
import { CloseButton } from '@chakra-ui/close-button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Stack} from '@chakra-ui/layout'
import React, { useState } from 'react'

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('')
    const [showResponsMessage, setShowResponsMessage] = useState(false)
    const [responsMessage, setResponsMessage] = useState('Not defined')

    const handler = (e) => {
        e.preventDefault()
        if(true){
            setShowResponsMessage(true)
            return
        } else { 
        }
    }
    
    return (
        <Box>
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
                    <Alert 
                        status="info"
                        hidden={!showResponsMessage}
                    >
                        <AlertIcon/>
                        <AlertDescription>{responsMessage}</AlertDescription>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowResponsMessage(false)} />
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
                        Send Mail
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default ForgotPasswordForm