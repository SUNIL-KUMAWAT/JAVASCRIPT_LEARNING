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
    Select,
    FormControl,
    FormLabel

} from '@chakra-ui/react'
import React, {useState} from 'react'
import {PhoneIcon} from '@chakra-ui/icons'


const Registration = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    // const [value, setValue] = useState('1')

    // const Students = [{
    //     Registration: '',
    //     studentName: '',
    //     FatherName: '',
    //     MobileNumber: '',
    //     Gender: '',
    //     Date: '',
    //     SelectClass: '',
    //     id: Math.random()

    // },]
    const [studentData, setStudentData] = useState([]);
    const [data, setData] = useState({})

    const onChangeHandle = (keyData, value) => {
        setData(d => ({
            ...d,
            id: Math.random(),
            [keyData]: value
        }));
    }

    const submitStudentData = (e) => {
        e.preventDefault()
        setStudentData([
            ...studentData,
            data
        ])
    }

    
    console.log(studentData);
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
                                <FormLabel>Registration No.</FormLabel>
                                <Input onChange={
                                        (e) => {
                                            return onChangeHandle("Registration", e.target.value)
                                        }
                                    }
                                    type={'number'}
                                    placeholder='Registration Number'/>
                            </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Student Name</FormLabel>
                            <Input onChange={
                                    (e) => onChangeHandle('studentName', e.target.value)
                                }
                                type={'text'}
                                placeholder='Full Name'/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Father Name</FormLabel>
                            <Input onChange={
                                    (e) => onChangeHandle('FatherName', e.target.value)
                                }
                                type={'text'}
                                placeholder='Full Name'/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel as='b'>Select Class</FormLabel>
                            <Select onChange={
                                    (e) => onChangeHandle('SelectClass', e.target.value)
                                }
                                placeholder='Select class'>
                                <option value='1'>
                                    1</option>
                                <option value='2'>
                                    2</option>
                                <option value='3'>
                                    3</option>
                                <option value='4'>
                                    4</option>
                                <option value='5'>
                                    5</option>
                                <option value='6'>
                                    6</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel as='b'>Mobile Number</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'
                                    children={
                                        <PhoneIcon
                                    color='gray.400'/>
                                    }/>
                                <Input onChange={
                                        (e) => onChangeHandle('MobileNumber', e.target.value)
                                    }
                                    type='tel'
                                    placeholder='Mobile number'/>
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel as='b'>Date</FormLabel>
                            <Input onChange={
                                    (e) => onChangeHandle('Date', e.target.value)
                                }
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"/>
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
                            mr={10}>
                            Submit
                        </Button>
                        <Button colorScheme='blue'
                            mr={3}
                            mt={5}
                            borderRadius={50}
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


export default Registration;
