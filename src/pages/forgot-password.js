import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import AuthCard from 'components/AuthCard'
import ForgotPasswordForm from 'components/ForgotPasswordForm'

const forgotPassword = () => {
    return(
        <Box
            bg='inherit'
            minH="100vh"
            py="12"
            px={{
            base: '4',
            lg: '8',
            }}
        >
            <Box maxW="md" mx="auto">
                <Heading textAlign="center" size="xl" fontWeight="extrabold">
                    Forgot Password?
                </Heading>
                <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                    <Text as="span">Enter the email address associated with your account</Text>
                </Text>
                <AuthCard>
                    <ForgotPasswordForm/>
                </AuthCard>
            </Box>
        </Box>
    )
}

export default forgotPassword
