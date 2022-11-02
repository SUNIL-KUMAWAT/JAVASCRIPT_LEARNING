import {

    Heading,
    Box,
    Text,
    Flex,
} from '@chakra-ui/react'
import {DownloadIcon, Icon} from '@chakra-ui/icons'

const Sample = () => {

    const paper = [
        {
            className: "8TH"
        },
        {
            className: "9TH"
        },
        {
            className: "10TH"
        },
        {
            className: "11TH"

        }, {
            className: "12TH"
        }
    ]
    return <Box mt={20}>
        <Box>
            <Flex pb={10}
                justifyContent={'center'}>
                <Heading as={'h4'}
                    size='lg'>Sample 
                </Heading>

                <Heading size={'lg'}
                ml={2}
                    color='rgb(129, 147, 249)'>
                   Paper</Heading>
            </Flex>
        </Box>
        <Flex mx={'6%'}
            flexWrap={'wrap'}>

            {
            paper.map((d) => {
                return <Flex mt={3}
                    ml={2}
                    borderRadius={10}
                    h='70px'
                    bg='#E6FFFA'
                    pl={2}
                    align={"flex-start"}
                    w={
                        {
                            base: '100%',
                            md: '100%',
                            lg: '100%',
                            xl: '23%'
                        }
                    }
                    justify='start'>

                    <Box bg={'white'}
                        w={'60px'}
                        h={'60px'}
                        p={3}
                        mt={1}
                        borderRadius={37}>
                        <svg fill='rgb(70, 153, 225)' viewBox="0 10 460 582" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path>
                        </svg>

                    </Box>
                    <Box>
                        <Text fontSize='22' color='black' ml="10px">
                            {
                            d.className
                        } </Text>
                        <Text fontSize='17px' color='gray' ml={2}>
                            Sample Paper
                            <Icon w={7}
                                h={5}
                                color={'green.400'}
                                as={DownloadIcon}/>
                        </Text>
                    </Box>
                </Flex>
        })
        } </Flex>
    </Box>
}
export default Sample;
