import {
    Text,
  HStack,
    Button,
    Box,
    Flex,
    Image,
    InputGroup,
    InputLeftElement,
    Input

} from '@chakra-ui/react'
import {PhoneIcon, TimeIcon, Icon} from '@chakra-ui/icons'
// import React, {useState} from 'react';

const Header = () => {

        // const [isMobile, setIsMobile] = useState(false);

    return <Box align="center">
        <Box width='100%'
        bgGradient='linear(to-br, blue.300  30%, blue.400 30.2%)'
            pb={"200px"}>
            <Flex color='white'
                // justifyContent={"space-between"}
                justifyContent='center'
                display={
                    {
                        base: "grid",
                        md: "flex"
                    }
            }>
                <Flex flex={1}
                    mt={5}>
                    <Image ml={'15%'} alt='logo'
                        h={"50px"}
                        w='auto'
                        src='https://gnat.gurukripa.ac.in/assets/logo.webp'
                        cursor='pointer'/>
                </Flex>
                <Box 
                    flex={1} 
                    width='auto'
                    mt={5}
                    mr={10}
                   
                    alignItems={"end"}>
                    <HStack                    
                    spacing={10}
                        w="fit-content"                       
                        display={
                            {  
                                base: "grid",
                                md: "flex"
                            }
                    }>
                        <Text  fontSize='md' ml={10} cursor='pointer'>Syllabus</Text>
                        <Text  fontSize='md' cursor='pointer'>Test Cities</Text>

                        <Text fontSize='md' cursor='pointer'>Sample Paper</Text>

                        <Text fontSize='md' cursor='pointer'>
                            Help</Text>
                        <Button size='md' height='42px' width='100px' bg='rgb(254, 118, 84)'
                            fontSize={18}
                            borderRadius={50}
                            borderColor='blue.100'>
                            Login
                        </Button>
                        {/* <Button className="mobile-menu-icon">
                            {isMobile ? <i className='menu'></i> : <i className='bar'></i>}
                        </Button> */}
                    </HStack>
                </Box>
            </Flex>

            <Flex w="100%"
                display={
                    {
                        base: "grid",
                        md: "flex"
                    }
            }>
                <Box float='left' ml='10%'
                    mt={20}
                    width='auto'
                    mr={5}
                    align='left'>
                    <Text fontSize={'5xl'} 
                        color='white'>Analyze your learning skill to crack</Text>
                    <Box fontSize={'175%'}
                        color='yellow.400'>JEE / NEET / NTSE / OLYMPIAD /IJSO / KVPY</Box>
                    <Box fontSize={'130%'}
                        color='wheat'>India's largest online aptitude and scholarship test.</Box>
                </Box>
                <Box mr={10} ml={10}>
                    <Image mt='90px' alt='logo' src='https://gnat.gurukripa.ac.in/assets/gnat-logo.webp' width='75%' cursor='pointer'/>


                    <InputGroup bg='white' borderRadius='80px'
                        mt={10}>
                        <InputLeftElement pointerEvents='none' pt='15px'
                            pl={5}
                            children={
                                <PhoneIcon
                            color='black'/>
                            }/>
                        <Input pl='60px' type='tel' border='none' borderRadius='80px' h='55px' placeholder='Mobile no'/>
                        <Button bg='rgb(254, 118, 84)' color='white' width='130px' borderRadius='20px' mt='8px' mr='10px'>Register</Button>
                    </InputGroup>
                </Box>
            </Flex>
        </Box>




        <Flex w={{base: '90%', lg: '72%'}} bg='white' h='auto'
            mt={"-100px"}
            borderRadius='20'
            boxShadow='rgb(0 0 0 / 33%) 5px 5px 20px 5px'
           
           justifyContent='center'
           
           display={
                {
                    base: "grid",
                    md: "flex"
                }
            }
            >
                <Box w={{base: "95%", lg: '20%'}} borderRadius='20' h={250} align="center" >
                    <Box  mt='30px' w='50px' h='50px' borderRadius='25px' bg='yellow.300'>
                        <Icon w={7}
                            h={7}
                            mt='11px'
                            bg='white'
                            borderRadius='13px'                        
                            as={TimeIcon}/></Box>
                    <Text mt='20px' color='blackAlpha.600'>Last date of registration</Text>

                    <Text  mt='5px' >31 Oct 2022</Text>
                </Box>
                <Box w={{base: "108%", lg: '25%'}} bg=' rgb(254, 118, 84)' h='auto'  mr={{base:'-4',  lg: '0px'}}  ml={{base:'-4',  lg: '0px'}}  mt={{base:'-4',  lg: '-8px'}} mb={{base:'-4',  lg: '-8px'}}  borderRadius='20' boxShadow='rgb(0 0 0 / 33%) 5px 5px 20px 5px' align="center" >
                <Box ml={1} mt='30px' w='50px' h='50px' borderRadius='25px' bg='yellow.300'>
                        <Icon w={7}
                            h={7}
                            mt='11px'
                            bg='white'
                            borderRadius='13px'                        
                            as={TimeIcon}/></Box>
                    <Text  mt='20px' color='blackAlpha.600'>Eligibility</Text>

                    <Text  mt='5px' overflowWrap="break-word"  >All Students from Class VIII to XII (Science).</Text>
                </Box>
                <Box  w={{base: "95%", lg: '20%'}} h='auto' borderRadius='20' align="center" >
                <Box mt='30px' w='50px' minH={'50px'} h={'fit-content'}  overflowWrap="break-word" borderRadius='25px' bg='yellow.300'>
                        <Icon w={7}
                            h={7}
                            mt='11px'
                            bg='white'
                            borderRadius='13px'                        
                            as={TimeIcon}/></Box>
                    <Text  mt='20px' color='blackAlpha.600'>Scholarship</Text>

                    <Text ml={2} mt='5px' overflowWrap="break-word" h={'fit-content'} >Up to 100% Scholarship in Gurukripa Classroom Course Fee for Academic Session 2023-24 from a pool of 200 Crore.</Text>
                </Box>
                <Box  w={{base: "95%", lg: '20%'}} h='auto' borderRadius='20' align="center">
                <Box  mt='30px' w='50px' h='50px' borderRadius='25px' bg='yellow.300'>
                        <Icon w={7}
                            h={7}
                            mt='11px'
                            bg='white'
                            borderRadius='13px'                        
                            as={TimeIcon}/></Box>
                    <Text  mt='20px' color='blackAlpha.600'>Mode</Text>

                    <Text mr={3} ml={6} mt='5px' overflowWrap="break-word"  >The exam will be held on 20 Nov 2022. Students can take this test in offline mode only.</Text>
                </Box>

            </Flex>

        
    </Box>

}

export default Header;
