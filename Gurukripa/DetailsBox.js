import {
    Text,   
    Box,
    Flex,   
} from '@chakra-ui/react'
import { TimeIcon, Icon} from '@chakra-ui/icons'

const DetailsBox = () => {

    return(
        <Flex w={
            {
                base: '90%',
                lg: '70%'
            }
        }
        bg='white'
        h='auto'
        mt={"-100px"}
        borderRadius='20'
        boxShadow='rgb(0 0 0 / 33%) 5px 5px 20px 5px'
        justifyContent='center'
        display={
            {
                base: "grid",
                md: "flex"
            }
    }>
        <Box w={
                {
                    base: "95%",
                    lg: '20%'
                }
            }
            borderRadius='20'
            h={250}
            align="center">
            <Box mt='30px' w='50px' h='50px' borderRadius='25px' bg='yellow.300'>
                <Icon w={7}
                    h={7}
                    mt='11px'
                    bg='white'
                    borderRadius='13px'
                    as={TimeIcon}/></Box>
            <Text mt='20px' color='blackAlpha.600'>Last date of registration</Text>

            <Text mt='5px'>31 Oct 2022</Text>
        </Box>
        <Box w={
                {
                    base: "108%",
                    lg: '25%'
                }
            }
            bg=' rgb(254, 118, 84)'
            h='auto'
            mr={
                {
                    base: '-4',
                    lg: '0px'
                }
            }
            ml={
                {
                    base: '-4',
                    lg: '0px'
                }
            }
            mt={
                {
                    base: '-4',
                    lg: '-8px'
                }
            }
            mb={
                {
                    base: '-4',
                    lg: '-8px'
                }
            }
            borderRadius='20'
            boxShadow='rgb(0 0 0 / 33%) 5px 5px 20px 5px'
            align="center">
            <Box ml={-3}
                mt='30px'
                w='50px'
                h='50px'
                borderRadius='25px'
                bg='yellow.300'>
                <Icon w={7}
                    h={7}
                    mt='11px'
                    bg='white'
                    borderRadius='13px'
                    as={TimeIcon}/></Box>
            <Text mt='20px'
                ml={-3}
                color='blackAlpha.600'>Eligibility</Text>

            <Text mt='5px' overflowWrap="break-word">All Students from Class VIII to XII (Science).</Text>
        </Box>
        <Box w={
                {
                    base: "95%",
                    lg: '22%'
                }
            }
            h='auto'
            borderRadius='20'
            align="center">
            <Box mt='30px' w='50px'
                minH={'50px'}
                h={'fit-content'}
                overflowWrap="break-word"
                borderRadius='25px'
                bg='yellow.300'>
                <Icon w={7}
                    h={7}
                    mt='11px'
                    bg='white'
                    borderRadius='13px'
                    as={TimeIcon}/></Box>
            <Text mt='20px' color='blackAlpha.600'>Scholarship</Text>

            <Text ml={2}
                mt='5px'
                overflowWrap="break-word"
                h={'fit-content'}>Up to 100% Scholarship in Gurukripa Classroom Course Fee for Academic Session 2023-24 from a pool of 200 Crore.</Text>
        </Box>
        <Box w={
                {
                    base: "95%",
                    lg: '22%'
                }
            }
            h='auto'
            borderRadius='20'
            align="center">
            <Box mt='30px' w='50px' h='50px' borderRadius='25px' bg='yellow.300'>
                <Icon w={7}
                    h={7}
                    mt='11px'
                    bg='white'
                    borderRadius='13px'
                    as={TimeIcon}/></Box>
            <Text mt='20px' color='blackAlpha.600'>Mode</Text>
            <Text mr={3}
                ml={6}
                mt='5px'
                overflowWrap="break-word">The exam will be held on 20 Nov 2022. Students can take this test in offline mode only.</Text>
        </Box>
    </Flex>
    )
}

export default DetailsBox;