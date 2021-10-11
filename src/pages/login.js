import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    VisuallyHidden,
  } from '@chakra-ui/react'
import React from 'react'
import Link from 'components/Link'
import AuthCard from 'components/AuthCard'
import LoginForm from 'components/LoginForm'
import DividerWithText from 'components/DividerWithText'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'

const login = () => {
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
                    Sign in to your account
                </Heading>
                <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                    <Text as="span">Don&apos;t have an account?</Text>
                    <Link href="/signup">Create a new one</Link>
                </Text>
                <AuthCard>
                    <LoginForm />
                    <DividerWithText mt="6">or continue with</DividerWithText>
                    <SimpleGrid mt="6" columns={3} spacing="3">
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Facebook</VisuallyHidden>
                            <FaFacebook />
                        </Button>
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Google</VisuallyHidden>
                            <FaGoogle />
                        </Button>
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Github</VisuallyHidden>
                            <FaGithub />
                        </Button>
                    </SimpleGrid>
                </AuthCard>
            </Box>
        </Box>
    )
}

export default login
