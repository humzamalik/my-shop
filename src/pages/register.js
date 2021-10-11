import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/client'
import { Box, Heading, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const register = () => {
    const [session, loading] = useSession()


    console.log(session)


    return (
        <Box 
        maxWidth={800} 
        margin='auto' 
        marginTop={5} 
        padding={10}
        shadow='2xl'
        >
            {session ? (
                <>
                    <Heading as='h2'>
                        Signed In
                    </Heading>
                    <div>
                        Now you can visit pages
                        <Link href='#' >
                            Dead LInk
                        </Link>
                    </div>
                    <br/>
                    <Button onClick={signOut}>Sign Out</Button>
                </>
            ) :
            (
                <>
                    <Heading as='h2'>
                        Not Signed In
                    </Heading>
                    <br/>
                    <Button onClick={signIn}>Sign In</Button>
                </>
            )}
        </Box>
    )
}

export default register
