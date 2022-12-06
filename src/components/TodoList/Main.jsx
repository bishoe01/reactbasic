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
import { SunIcon ,MoonIcon} from '@chakra-ui/icons';
import '../../Todo.scss'
import { BsFillBrightnessHighFill } from 'react-icons/bs';

function Main(props) {
    const [show, setShow] = useState([1, 2, 3]);
    const [now, setNow] = useState(1);
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [notcompleted, setNotCompleted] = useState([]);
    const [localtodos, setLocalTodos] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const onPressEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(`${e.target.value} is added`);
            setTodos([...todos, { text: e.target.value, isCompleted: false }]);
            e.target.value = '';
        }
    }
    useEffect(() => {
        setCompleted(todos.filter(todo => todo.isCompleted));
        setNotCompleted(todos.filter(todo => !todo.isCompleted));
        return () => {
            console.log("cleanup");
        };
    }, [completed, notcompleted]);

    useEffect(() => {
        { !todos ? localStorage.getItem('todos') : localStorage.setItem('todos', JSON.stringify(todos)) }
    }, [])

    return (
        <ChakraProvider>
            <Card w="25%" style={{color : darkMode? "white" : "black",backgroundColor : darkMode ? "black" : "white"}}>
                <CardHeader>
                    <Heading size='md' pr="15%" style={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton style={{backgroundColor : darkMode ? "black" : "gray", color: darkMode? "orange" : "black"}}aria-label='Search database' icon={darkMode ? <MoonIcon/> : <SunIcon />} onClick={() =>setDarkMode(!darkMode)} />
                        <Tabs>
                            <TabList>
                                {show.map((item, index) => {
                                    return (
                                        <Tab key={index} onClick={() => setNow(item)}>{item}</Tab>
                                    )
                                }
                                )}
                            </TabList>
                        </Tabs>

                    </Heading>
                    <Divider variant="dashed" mt="20px" style={{ border: "0.2px solid gray" }} />
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        {
                            now === 1 ? todos.map((todo, index) => {
                                return (
                                    <Box key={index} p="2" shadow="md" borderWidth="1px" borderRadius="md" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Text as={todo.isCompleted ? "s" : ""}>{todo.text}</Text>
                                        <Checkbox onChange={() => {
                                            setTodos([...todos], todos[index].isCompleted = !todos[index].isCompleted);
                                        }} />
                                    </Box>
                                )
                            }) : (now === 2) ?
                                todos.filter((todo) => todo.isCompleted === false).map((todo, index) => {
                                    return (
                                        <Box key={index} p="2" shadow="md" borderWidth="1px" borderRadius="md" style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Text>{todo.text}</Text>
                                            <Checkbox onChange={() => {
                                                setTodos(todos[index].isCompleted = !todos[index].isCompleted);
                                            }} />
                                        </Box>
                                    )
                                }
                                ) : todos.filter((todo) => todo.isCompleted === true).map((todo, index) => {
                                    return (
                                        <Box key={index} p="2" shadow="md" borderWidth="1px" borderRadius="md" style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Text>{todo.text}</Text>
                                            <Checkbox onChange={() => {
                                                setTodos([index].isCompleted = !todos[index].isCompleted);
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
                    <Input type='text' />
                    <Input type='submit' />

                </FormControl>
            </Card>
        </ChakraProvider>
    );
}

export default Main;