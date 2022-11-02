import { useState } from 'react'
import {
//   useColorMode,
//   Switch,
  Flex,
  Button,
  IconButton,
  Box
 
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'



 const Navbar = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <Box href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Syllabus
                    </Button>
          </Box>
          <Box href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Test Cities
                    </Button>
          </Box>

          <Box href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >Sample Paper
              
                    </Button>
          </Box>

          <Box href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Help
                    </Button>
          </Box>
          <Box href="/contact" passHref>
          <Button size='md' height='42px' width='100px' bg='rgb(254, 118, 84)'
                            fontSize={18}
                            borderRadius={50}
                            borderColor='blue.100'
                            mt={5}>
                            Login
                        </Button>
          </Box>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
      
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
       
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <Box href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Syllabus
                    </Button>
          </Box>
          <Box href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Test Cities
                    </Button>
          </Box>

          <Box href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              Sample Paper
                    </Button>
          </Box>

          <Box href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Help
            </Button>
          </Box>
          <Box href="/contact" passHref>
          <Button size='md' height='42px' width='100px' bg='rgb(254, 118, 84)'
                            fontSize={18}
                            borderRadius={50}
                            borderColor='blue.100'
                            mt={5}>
                            Login
                        </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Navbar;