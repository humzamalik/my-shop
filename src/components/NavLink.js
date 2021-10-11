import React from 'react'
import { Link } from '@chakra-ui/react'

const NavLink = (props) => {
    const { children } = props
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
            textDecoration: 'none',
            bg: 'gray.200',
            }}
            {...props}
            >
            {children}
        </Link>
    )
}

export default NavLink
