import {Text, Flex, VStack, Image} from '@chakra-ui/react'

const Footer = () => {
    return <Flex bg={'blue.400'}
        pt={20}
        align="stretch"
        height={'auto'}
        minH={290}
        mt={10}
        flexWrap={'wrap'}
        display={
            {
                base: "grid",
                md: "flex"
            }
    }>
        <VStack ml={5}
            flex={
                {
                    base: '100%',
                    md: '25%',
                    lg: '33%'
                }
        }>
            <Image alt='logo'
                h={"50px"}
                w='30%'
                src='https://gnat.gurukripa.ac.in/assets/logo.webp'
                cursor='pointer'/>
            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Gurukripa Career Institute (GCI)</Text>
            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Head Office: Jyoti Nagar, Piprali Road, Sikar</Text>
            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Mob.:   88751-24365s</Text>
        </VStack>
        <VStack flex={
            {
                base: '100%',
                md: '25%',
                lg: '32%'
            }
        }>
            <Text fontSize='xl'
                color={'white'}
                cursor='pointer'>Syllabus</Text>
            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Test Cities</Text>

            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Sample Paper</Text>

            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>
                Help</Text>
        </VStack>
        <VStack flex={
            {
                base: '100%',
                md: '25%',
                lg: '33%'
            }
        }>
            <Text fontSize='xl'
                color={'white'}
                cursor='pointer'>Syllabus</Text>
            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Test Cities</Text>

            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>Sample Paper</Text>

            <Text color={'#E2E8F0;'}
                fontSize='md'
                cursor='pointer'>
                Help</Text>
        </VStack>
    </Flex>
}
export default Footer;
