/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    Avatar,
    Box,
    Button,
    Card,
    Flex,
    HStack,
    Stack,
    Text
} from "@chakra-ui/react"
import { VscVerifiedFilled } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useState, useEffect } from "react";

function ProfileFeature() {
    const user = useSelector((state: RootState) => state.auth)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()) * 1000);

    // console.log(user);
    useEffect(() => {
        const initialRandomNumber = Math.floor(Math.random() * 1000);
        setRandomNumber(initialRandomNumber);
    }, []);


    return (
        <Card bg="whiteAlpha.200" p={4}>
            <Text color="white">My Profile</Text>

            <Box
                pos="relative"
                h="70px"
                mt={3}
                rounded="xl"
                bg={"green"}
            >
                <Box
                    pos="absolute"
                    bottom={-6}
                    left={4}
                    p={1}
                    bg="blackAlpha.800"
                    rounded="full"
                >
                    <Avatar size="md" name={user?.full_name} src={user?.photo_profile} />
                    
                </Box>
            </Box>

            <Flex justify="right" mt={-6}>
                <Button
                    color="white"
                    size="xs"
                    rounded="full"
                    variant="outline"
                    mt={8}
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Edit Profile
                </Button>
            </Flex>

            <Stack spacing={0}>
                <Text mt={3} fontSize="lg" fontWeight="semibold" color="white" display={"flex"} alignItems={"center"} gap={1}>
                    {user?.username} <span style={{ color: "#1D9BF0" }}><VscVerifiedFilled /></span>
                </Text>
                <Text fontSize='xs' color='whiteAlpha.600'>@{user?.username}</Text>
                <Text fontSize='sm' color='whiteAlpha.800' mt={2}>{user?.bio}</Text>
                <HStack fontSize='sm' mt={5}>
                    <HStack>
                        <Text color='whiteAlpha.800'>{randomNumber}</Text>
                        <Text color='whiteAlpha.600'>Following</Text>
                    </HStack>
                    <HStack>
                        <Text color='whiteAlpha.800'>{randomNumber}</Text>
                        <Text color='whiteAlpha.600'>Followers</Text>
                    </HStack>
                </HStack>
            </Stack>
        </Card>
    )
}

export default ProfileFeature