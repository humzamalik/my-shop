import { chakra } from '@chakra-ui/system'
import * as React from 'react'

export const Link = (props) => (
  <chakra.a
    marginStart="1"
    href="#"
    color='blue.200'
    _hover={{
      color:'blue.300',
    }}
    display={{
      base: 'block',
      sm: 'inline',
    }}
    {...props}
  />
)

export default Link 