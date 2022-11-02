import {
    Button,
    Flex,

    Text,
    useBoolean,
    Heading,

    Box
} from '@chakra-ui/react'

import {useDisclosure} from '@chakra-ui/react'
const Ask = () => {

    const [flag, setFlag] = useBoolean()
    const {getDisclosureProps, getButtonProps} = useDisclosure()
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()


    const AskQuestions = [
        {
            data: 'What is GNAT?'
        }, {
            data: 'How and when will the exam be conducted?'
        },
    ]
    return <>
        <Box mt={10}
            mb={50}
            ml={
                {
                    base: "35px",
                    md: '50px',
                    lg: "70px"
                }
        }>
            <Heading as={'h4'}
                display='inline'
                size='lg'>Frequently Asked
            </Heading>
            <Heading size={'lg'}
                display='inline'
                color='rgb(129, 147, 249)'>
                {''}
                Questions</Heading>
            <Text mr={2}>some frequently asked questions by students to us.</Text>
        </Box>

        {
        AskQuestions.map((d) => {
            return <Box bg={'#EDF2F7;'}
                borderRadius={15}
                {...buttonProps}
                px={5}
                my={5}
                mx={'5%'}
                maxW={'85%'}
                minH={14}>
                <Flex pt={2}
                    onClick={
                        setFlag.toggle
                }>

                    <Text overflowWrap="break-word"
                        mt={2}
                        width={'100%'}
                        color={'black'}>
                        {
                        d.data
                    } </Text>
                    <Button px={2}
                        pb={2}

                        borderRadius={30}
                        h={10}
                        bg='#FF5C5C;'
                        fontSize={40}
                        color='black'>
                        {
                        flag ? '-' : '+'
                    }</Button>
                </Flex>
                <Text {...disclosureProps}
                    mt={3}
                    onClick={
                        setFlag.toggle
                }>
                    This text is being visibly toggled hidden and shown by the button.
                    <br/>
                    (Inspect these components to see the rendered attributes)
                </Text>
            </Box>
    })
    } </>
}

export default Ask;
