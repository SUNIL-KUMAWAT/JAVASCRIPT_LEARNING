import {
    Flex,
    Text,
    VStack,
    Box,
    HStack,
    Heading

} from '@chakra-ui/react'


const Syllabus = () => {

    const pattern = [
        {
            className: "8TH",
            Col: '#E2E8F0'
        },
        {
            className: "9TH",
            Col: '#FFB8B8'
        },
        {
            className: "10TH",
            Col: '#FFE5E5'
        },
        {
            className: "11TH",
            Col: '#EDF2F7'
        }, {
            className: "12TH",
            Col: '#FFE5E5'
        }
    ]
    return <>
        <Box mt={20}>
            <Flex pb={10}
                justifyContent={'center'}>
                <Heading as={'h4'}
                    size='lg'>Syllabus & 
                </Heading>

                <Heading size={'lg'}
                  ml={2}  color='rgb(129, 147, 249)'>Pattern</Heading>
            </Flex>
        </Box>
        <Box width={'100%'}
            px={'10%'}>
            <VStack overflowX={'scroll'}
                w={
                    {
                        base: '100%',
                        lg: '100%'
                    }
            }>
                <HStack spacing={10}
                    w={'100%'}>
                    {
                    pattern.map((d) => {
                        return <Flex>
                            <VStack w={180}
                                h={200}

                                borderRadius={8}
                                bg={
                                    d.Col
                                }
                                p={5}>
                                <Box bg={'white'}
                                    w={'75px'}
                                    h={'75px'}
                                    p={3}
                                    borderRadius={37}>
                                    <svg fill='rgb(70, 153, 225)' stroke-width="0" viewBox="0 0 16 16" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
                                    </svg>
                                </Box>
                                <Text fontSize='22' color='black'>
                                    {
                                    d.className
                                } </Text>
                                <Text fontSize='17px' color='gray'>
                                    Syllabus & Pattern
                                </Text>
                            </VStack>
                        </Flex>
                })
                } </HStack>
            </VStack>
        </Box>
    </>
}
export default Syllabus;
