import {
    Text,
    Box,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Button

} from '@chakra-ui/react'
import {PhoneIcon} from '@chakra-ui/icons'

const Request = () => {

    return <Box borderRadius={15}
        bg={'rgb(254, 200, 70)'}
        m={'auto'}
        w={
            {
                base: '95%',
                md: '90%',
                lg: '90%',
                xl: '80%'
            }
        }
        mt={20}
        pt={10}
        pl={'5%'}
        pb={10}>
        <Heading as='h2' size='lg'
            color={'white'}>
            Request a callback
        </Heading>
        <Text color={'white'}>if you have any queries feel free to give a callback.</Text>
        <Box mr={500}>
            <InputGroup bg='white' borderRadius='80px'
                minW={230}
                mt={10}>
                <InputLeftElement pointerEvents='none' pt='15px'
                    pl={'2%'}
                    children={
                        <PhoneIcon
                    color='black'/>
                    }/>
                <Input pl={10}
                    type='tel'
                    border='none'
                    borderRadius='80px'
                    h='55px'
                    placeholder='Mobile no'/>
                <Button bg='rgb(254, 118, 84)' color='white' width='110px' borderRadius='20px' mt='8px' mr='8px'>Send</Button>
            </InputGroup>
        </Box>
    </Box>
}
export default Request;
