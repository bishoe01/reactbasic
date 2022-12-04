import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {
    Card, CardHeader, Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    TabPanel, TabPanels, Checkbox, Divider, Tabs, Tab, TabList, IconButton, CardBody, CardFooter, Heading, Text, Box, Stack, StackDivider
} from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons';
import '../../Todo.scss'
import { BsFillBrightnessHighFill } from 'react-icons/bs';

function Main(props) {
    const [show , setShow] = useState([1,2,3]);
    const [now , setNow] = useState(1);
    const [todos, setTodos] = useState([]);
    const onPressEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(`${e.target.value} is added`);
            setTodos([...todos, { text: e.target.value, isCompleted: false }]);
            e.target.value = '';
        }
    }
    useEffect(() => {
        localStorage.setItem('todos', todos);
    }, [todos])

    return (
        <ChakraProvider>
            <Card w="25%">
                <CardHeader>
                    <Heading size='md' pr="15%" style={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton colorScheme="gray" aria-label='Search database' icon={<SunIcon />} onClick={() => console.log("hi")} />
                        <Tabs>
                            <TabList>
                                {show.map((item, index) => {
                                    return (
                                        <Tab key={index} onClick={() => setNow(item)}>{item}</Tab>
                                    )}
                                )}
                            </TabList>
                        </Tabs>

                    </Heading>
                    <Divider variant="dashed" mt="20px" style={{ border: "0.2px solid gray" }} />
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        {
                            now === 1 ? todos.map((todo,index) => {
                                return (
                                    <Box key={index} p="2" shadow="md" borderWidth="1px" borderRadius="md" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Text>{todo.text}</Text>
                                        <Checkbox onChange={() => {
                                            let newTodos = [...todos];
                                            newTodos[index].isCompleted = !newTodos[index].isCompleted;
                                            setTodos(newTodos);
                                        }} />
                                    </Box>
                                )
                            }) : (now===2) ? todos.filter((todo) => todo.isCompleted === false).map((todo,index) => {
                                return (
                                    <Box key={index} p="2" shadow="md" borderWidth="1px" borderRadius="md" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Text>{todo.text}</Text>
                                        <Checkbox onChange={() => {
                                            let newTodos = [...todos];
                                            newTodos[index].isCompleted = !newTodos[index].isCompleted;
                                            setTodos(newTodos);
                                        }} />
                                    </Box>
                                )
                            }
                            ) : todos.filter((todo) => todo.isCompleted === true).map((todo,index) => {
                                return (
                                    <Box key={index} p="2" shadow="md" borderWidth="1px" borderRadius="md" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Text>{todo.text}</Text>
                                        <Checkbox onChange={() => {
                                            let newTodos = [...todos];
                                            newTodos[index].isCompleted = !newTodos[index].isCompleted;
                                            setTodos(newTodos);
                                        }} />
                                    </Box>
                                )
                            }
                            )
                        }
                        
                    </Stack>
                </CardBody>
                <FormControl onKeyPress={(e) => onPressEnter(e)}>
                    <FormLabel>Type Action</FormLabel>
                    <Input type='text'/>
                    <Input type='submit'/>

                </FormControl>
            </Card>
        </ChakraProvider>
    );
}

export default Main;