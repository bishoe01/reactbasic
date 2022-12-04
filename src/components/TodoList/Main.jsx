import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, TabPanel,TabPanels,Divider, Tabs, Tab, TabList, IconButton, CardBody, CardFooter, Heading, Text, Box, Stack, StackDivider } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons';
import '../../Todo.scss'
import { BsFillBrightnessHighFill } from 'react-icons/bs';

function Main(props) {
    return (
        <ChakraProvider>
            <Card w="25%">
                <CardHeader>
                    <Heading size='md' pr="15%" style={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton colorScheme="gray" aria-label='Search database' icon={<SunIcon />} onClick={() => console.log("hi")} />
                        <Tabs>
                            <TabList>
                                <Tab onClick={()=>{console.log("one");}}>One</Tab>
                                <Tab>Two</Tab>
                                <Tab>Three</Tab>
                            </TabList>
                        </Tabs>

                    </Heading>
                    <Divider variant="dashed" mt="20px" style={{border:"0.2px solid gray"}}/>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </ChakraProvider>
    );
}

export default Main;