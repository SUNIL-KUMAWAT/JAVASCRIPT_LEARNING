import {Flex, Text} from '@chakra-ui/react'

const GantData = () => {
    const Gant = [
        {
            data: 'GNAT is for JEE/ NEET/ NTSE/ Olymiad/ IJS/ KVPY aspirants who wants to be success & to take admission in the prestigious Engineering and Medical institutes in the country'
        },
        {
            data: 'Gurukripa National Aptitude Test(GNAT) can always help you to make important decision by analysing his/her capability and actual strength of imporvement with respect to the skills required to qualify JEE/NEET/NTSE/ Olympiad/IJSO/KVPY.'
        },
        {
            data: 'GNAT develop your analytical skills of application base approach'
        },
        {
            data: 'An aspirant will recieve career guidelines from experts after the test to know various options that await you.'
        }, {
            data: 'GNAT not only help you to increase your logical or reasoning approach but also become eligible for a handsome scholorship. GNAT score will help you to get upto 100% scholorshipe at the time of admission in Gurukripa institute.'
        }, {
            data: 'Student can justify his/her potential and can register for Gurukripa National Aptitude Test(GNAT) on 20 Nov 2022'
        }, {
            data: 'Gurukripa National Aptitude Test is a Golden opportunity to get connected and study with most experienced faculties in a very nominal fee.'
        }
    ]

    return <Flex justifyContent={"space-between"}
        flexWrap={'wrap'}
        mx={
            {
                base: 5,
                md: 10,
                lg: 20
            }
    }>
        {
        Gant.map((d, index) => {
            return <Flex mt={5}
                align={"flex-start"}
                w={
                    {
                        base: '100%',
                        lg: '48%'
                    }
            }>
                <Text h={'fit-content'}
                    p={1}
                    px={3}
                    bg={'black'}
                    color="white"
                    borderRadius={100}
                    alignItems={'top'}>
                    {index}</Text>
                <Text ml={3}
                    overflowWrap="break-word"
                    text-align="justify">
                    {
                    d.data
                }</Text>
            </Flex>
    })
    } </Flex>
}

export default GantData;
