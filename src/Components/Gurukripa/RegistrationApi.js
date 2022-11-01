import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    FormControl,
    FormLabel

} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import {EmailIcon} from '@chakra-ui/icons'
import axios from "axios";
import { useToast } from '@chakra-ui/react'

const Registration = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [studentData, setStudentData] = useState([]);
    const [student, setStudent] = useState({})

    const [show, setShow] = useState(false)
    // const [user, setUser] = useState(null);
    const handleClick = () => setShow(!show)

    const onChangeHandle = (keyData, value) => {
        setStudent(s => ({
            ...s,
            role: 'OWNER',
            [keyData]: value
        }));
    } // nnLXT

    const submitStudentData = async (e) => {
        e.preventDefault()
        setStudentData([
            ...studentData,
            student
        ])
        await axios.post('http://192.168.1.6:4001/user', student).catch(d => console.log('error', d))
    }

    // useEffect(() => {
    //     axios.get('https://fusionauth.io/docs/v1/tech/apis/login').then((response) => {
    //         setUser(response.data);
    //     });
    // }, []); // http://192.168.1.6:4001/user
    
    return (
        <>
            <Button onClick={onOpen}
                mt={5}
                colorScheme='blue'
                mr={3}
                _hover={
                    {bgGradient: 'linear(to-r, yellow.300, pink.500)'}
            }>
                Registration
            </Button>
            <Modal isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader fontSize={'x-large'}>Gnat Registration</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <form onSubmit={submitStudentData}>

                            <FormControl isRequired>
                                <FormLabel>Student Name</FormLabel>
                                <Input onChange={
                                        (e) => onChangeHandle('name', e.target.value)
                                    }
                                    type={'text'}
                                    placeholder='Full Name'/>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel mt={3}
                                    as='b'>Email</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'
                                        children={
                                            <EmailIcon
                                        color='gray.400'/>
                                        }/>
                                    <Input onChange={
                                            (e) => onChangeHandle('email', e.target.value)
                                        }
                                        type='email'
                                        placeholder='Email'/>
                                </InputGroup>
                            </FormControl>
                            <FormControl >
                                <FormLabel mt={3}>password</FormLabel>
                                <InputGroup size='md'>
                                    <Input onChange={
                                            (e) => onChangeHandle('password', e.target.value)
                                        } pr='4.5rem'
                                        type={
                                            show ? 'text' : 'password'
                                        }
                                        placeholder='Enter password'/>
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm'
                                            onClick={handleClick}>
                                            {
                                            show ? 'Hide' : 'Show'
                                        } </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button type='submit'
                                onClick={onOpen}
                                size='md'
                                height={10}
                                width={40}
                                bgGradient='linear(to-r, rgb(0, 128, 255), blue.200)'
                                _hover={
                                    {bgGradient: 'linear(to-r, yellow.300, pink.500)'}
                                }
                                fontSize={18}
                                borderRadius={50}
                                borderColor='blue.500'
                                mt={5}
                                ml={20}>
                                Submit
                            </Button>
                            <Button colorScheme='blue'
                                ml={2}
                                mt={5}
                                borderRadius={50}
                                onClick={onClose}>
                                Close
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    )
}


export default Registration;
