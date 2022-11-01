import {   
    Button,
    Box,
    Flex,
    Image,
    Link,
} from '@chakra-ui/react'

import {useState} from 'react'
import {IconButton} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import AnalyzeSkill from './AnalyzeSkill'
import DetailsBox from './DetailsBox'
// import { Link } from "react-router-dom";
// import Syllabus from './Syllabus'
import LoginModal from './LoginModal'

const Header = () => {
    const [display, changeDisplay] = useState('none')

    const menu = [
        {
            name: 'Syllabus',
            path: 'syllabus'
        }, {
            name: 'Test Cities',
            path: 'testcities'
        }, {
            name: 'Sample Paper',
            path: 'samplepaper'
        }, {
            name: 'Help',
            path: 'help'
        },
    ]

    return <Box align="center">
        <Box width='100%' bgGradient='linear(to-br, blue.300  30%, blue.400 30.2%)'
            pb={"200px"}>
            <Flex color='white' justifyContent='center'
                display={
                    {
                        base: "grid",
                        md: "flex"
                    }
            }>
                <Flex flex={1}
                    mt={5}>
                    <Image ml={{base:'5px', md:'80px' ,lg:"100px"}}
                        alt='logo'
                        h={"50px"}
                        w='auto'
                        src='https://gnat.gurukripa.ac.in/assets/logo.webp'
                        cursor='pointer'/>
                </Flex>
                <Flex // position="fixed"
                    top="1rem"
                    mr={{base:'1px', md:'5px', lg:'50px'}}
                    right="1rem"
                    align="center"
                    >
                    {/* Desktop  */}
                    <Flex display={
                        ['none', 'none', 'flex', 'flex']
                    }
                    >
                      
                   { menu.map((d)=>{
                        return (<Box 
                        mr={10}
                        mt={7}
                        >
                            <Link to={"/" + d.path} fontSize={18} style={{ textDecoration: 'none' }}>                              
                                {d.name}
                            </Link>
                           
                        </Box>)
                    })}

                       
                    
                        <Box >
                        
                            <LoginModal/>
                        </Box>
                    </Flex>
                    {/* Mobile */}
                    <IconButton aria-label="Open Menu" size="lg"
                    
                       ml={{base:'290px', md:'500px', lg:'90px'}}
                        mt={'-55px'}
                        bg={'gray.300'}
                        icon={<HamburgerIcon h={'30px'} w={'30px'}/>}
                        onClick={
                            () => display === 'flex' ? changeDisplay("none") : changeDisplay('flex')
                        }
                        display={
                            ['flex', 'flex', 'none', 'none']
                        }/>

                </Flex>
                {/* Mobile Content */}
                <Flex w='200px'
                    ml={'80px'}
                    mt={5}
                    borderRadius={8}
                    display={display}
                    bgColor="blue.200"
                    zIndex={10}
                    h="auto"
                    overflowY="auto"
                    flexDir="column">
                   
                    <Flex flexDir="column" align="center">
                  
                    { menu.map((d)=>{
                           return <Box h={9}>
                            <Button color={'Black'}
                                as="a"
                                variant="ghost"
                                h={'20px'}
                                my={5}
                                w="100%">
                                {d.name}
                            </Button>
                        </Box>
                        })}

                       
                        <Box href="/contact" passHref>
                            <Button size='md' height='42px' width='100px' bg='rgb(254, 118, 84)'
                                fontSize={18}
                                borderRadius={50}
                                borderColor='blue.100'
                                mt={5}
                                mb={5}>
                                Login
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <AnalyzeSkill/>
         
        </Box>
        <DetailsBox/>
       
    </Box>

}

export default Header;
