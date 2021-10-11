import React from 'react'
import { Box } from '@chakra-ui/react'

const AuthCard = (props) => {
    return (
        <Box
            bg='gray.50'
            py='8'
            px={{
                base: "4",
                "md": "10",
            }}
            shadow="base"
            rounded={{
                sm: 'lg',
            }}
            {...props}
        />
    )
}

export default AuthCard
