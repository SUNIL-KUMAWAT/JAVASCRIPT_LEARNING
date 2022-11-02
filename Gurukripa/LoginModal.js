// ramn97
// ram


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
    InputRightElement,
    InputGroup,

    FormControl,
    FormLabel

} from '@chakra-ui/react'
import React, {useState} from 'react'
// import {PhoneIcon} from '@chakra-ui/icons'
import Registration from './RegistrationApi'
import axios from "axios";
import {useToast} from '@chakra-ui/react'

const LoginModal = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const toast = useToast()
    const [res, setRes] = useState(null)

    const login = async (e) => {
        e.preventDefault()
        return await axios.post('http://192.168.1.6:4001/auth/login', {username, password}).then((response) => {
             setRes(JSON.stringify(response.success))
            if (response.data.username) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
           
            return response.data;
        });
    };
    console.log(res)

    return (
        <>

            <Button onClick={onOpen}
                size='md'
                height='42px'
                width='150px'
                bgGradient='linear(to-r,	rgb(0, 128, 255), blue.200)'
                _hover={
                    {bgGradient: 'linear(to-r, yellow.300, pink.500)'}
                }
                fontSize={18}
                borderRadius={50}
                borderColor='blue.500'
                mt={5}>
                Gnat Login
            </Button>

            <Modal isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader fontSize={'x-large'}>Login for Gurukripa's National Aptitude Test</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <form onSubmit={login}>
                            <FormControl isRequired>
                                <FormLabel>User Name</FormLabel>
                                <Input onChange={
                                        (e) => setUserName(e.target.value)
                                    }
                                    placeholder='Registration Number'/>
                            </FormControl>

                            {/* <FormControl isRequired>
                            <FormLabel>Mobile Number</FormLabel>
                            <InputGroup>
                            <InputLeftElement pointerEvents='none'
                                children={
                                    <PhoneIcon
                                color='gray.400'/>
                                }/>
                            <Input isRequired type='tel' placeholder='Mobile number'/>
                        </InputGroup>
                        </FormControl>   */}

                            <FormControl isRequired>
                                <FormLabel mt={3}>password</FormLabel>
                                <InputGroup size='md'>
                                    <Input onChange={
                                            (e) => setPassword(e.target.value)
                                        }
                                        pr='4.5rem'
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
                            <Registration/>
                            <Button mt={5}
                                colorScheme='blue'
                                mr={3}
                                type='submit'
                                onClick={
                                    () => toast({
                                        title: 'Account created.',
                                        description: "We've created your account for you.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true
                                    })
                            }>
                                Login
                            </Button>
                            <Button mt={5}
                                colorScheme='blue'
                                mr={12}
                                onClick={onClose}>
                                Close
                            </Button>
                        </form>
                    </ModalBody>


                    {/* <Button variant='ghost'>Secondary Action</Button> */} </ModalContent>
            </Modal>

        </>
    )
}


export default LoginModal;
