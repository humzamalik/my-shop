import { Container, Heading } from '@chakra-ui/layout'
import React from 'react'

const secret = () => {
    return (
        <Container>
            <Heading as='h1'>
                This page should be protected
            </Heading>
        </Container>
    )
}

export default secret
