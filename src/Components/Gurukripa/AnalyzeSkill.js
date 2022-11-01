import {
    Text,
    Button,
    Box,
    Flex,
    Image,
    InputGroup,
    InputLeftElement,
    Input

} from '@chakra-ui/react'
import {PhoneIcon} from '@chakra-ui/icons'


const AnalyzeSkill = () =>{

    return(
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
            <Text fontSize={{base:'38px', md:'50px',lg:'60px'}}
                color='white'>Analyze your learning skill to crack</Text>
            <Box fontSize={'175%'}
                color='yellow.400'>JEE / NEET / NTSE / OLYMPIAD /IJSO / KVPY</Box>
            <Box fontSize={'130%'}
                color='wheat'>India's largest online aptitude and scholarship test.</Box>
        </Box>
        <Box mr={10}
            ml={10}>
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
    )
}
export default AnalyzeSkill;