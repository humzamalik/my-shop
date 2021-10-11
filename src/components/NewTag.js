import { Tag, useColorModeValue } from '@chakra-ui/react'
import React from 'react'


const NewTag = (props) => {
    return (
        <Tag
            size={'sm'}
            bg={useColorModeValue('green.300', 'green.800')}
            ml={2}
            color={'white'}
            {...props}
        >
            New
        </Tag>
    )
}

export default NewTag
