import React, { useState } from 'react'
import {
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Box,
    Link,
  } from '@chakra-ui/react'

const NavAvatar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return isLoggedIn ?
        (
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                >
                    <Avatar
                        size={'sm'}
                        src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                </MenuButton>
                <MenuList
                    bg='gray.100'
                    shadow='md'
                >
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                </MenuList>
            </Menu> 
        ) : (
            <Box
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'} 
            >
                <Avatar
                        as='a'
                        href='/login'
                        size={'sm'}
                        src={
                            'media/user.png'
                        }
                />
            </Box>
        )
}

export default NavAvatar
