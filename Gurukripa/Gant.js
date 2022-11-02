import {Box, Text, Heading, HStack, Flex} from '@chakra-ui/react'

const Gant = () => {
     
    return <Box align="center"
        p={{ base: 5, md: 20}}
        width={'100%'}>
        <HStack mt={'5%'}>
            <Heading>Why</Heading>
            <Heading color='rgb(129, 147, 249)'>GANT</Heading>
        </HStack>
        <Flex
            align="stretch"
            height={'auto'}
            minH={290}
            mt={10}
            flexWrap={'wrap'}
        >
            <Box mb={2} flex={{base:'100%', md:'49%', lg:'32%'}} 
                bg={'rgb(97, 119, 248)'}
                p={6}              
                borderRadius={20}>
                <Heading as='h6' size='md'
                    mb={3}
                    color={'gray.100'}>
                    Teacher guidelines
                </Heading>
                <Text color={'gray.200'}>Students work hard, have passion towards their AIM but failed to crack National Level competitive exams due to lack of Approach, less application oriented guidelines, those students should take GNAT to realise, to understand their actual potential to crack JEE / NEET / NTSE / OLYMPIAD /IJSO / KVPY</Text>
            </Box>
            <Box mb={2} mx={{base: "none", md: 2}}
                flex={{base:'100%', md:'49%', lg:'32%'}}
                bg={'rgb(234, 106, 149)'}
                p={6}
               
                borderRadius={20}
            >
                <Heading as='h6'
                    size={'md'}
                    mb={3}                   
                    color={'gray.100'}>
                    Clear vision
                </Heading>
                <Text>
                    To clear vision of application oriented exams, to identify and fill the lacuna GNAT helping students to achieve their GOAL towards their path of success
                </Text>
            </Box>
            <Box mb={2} flex={{base:'100%', md:'49%', lg:'32%'}}
                bg={'rgb(254, 200, 70)'}
                p={6}
               
                borderRadius={20}
            >
                <Heading as='h6'
                    size={'md'}
                    mb={3}
                    color={'gray.100'}>
                    Enhance learning
                </Heading>
                <Text>GNAT helps to identify & enhance learning skills like logical & reasoning approach, potential of creativity, develop brain power, and expand numerical abilities etc.</Text>
            </Box>
        </Flex>
    </Box>
}
export default Gant;
