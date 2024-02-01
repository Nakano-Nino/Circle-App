/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { Replies } from "@/types/ReplyType";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";


function ReplyFeature(props: Replies) {

    return (

        <Grid width={"full"}>
            <Flex gap={3} borderBottom='1px solid gray' mt={100}>
                <Avatar size="sm" src={props.users.photo_profile} />
                <Box mb={4}>
                    <HStack>
                        <Text
                            display="flex"
                            gap={1}
                            fontSize="md"
                            fontWeight="medium"
                            color="whiteAlpha.800"
                            cursor='pointer'
                        >
                            {props.users.full_name}

                            <Text fontWeight="light" display="flex" color="whiteAlpha.600" fontSize={"xs"} alignItems={"center"}>
                                @{props.users.username} <BsDot color="gray" size={24} />
                                {/* {time} */}
                            </Text>
                        </Text>
                    </HStack>

                    <Text fontSize="sm" color="whiteAlpha.800" fontWeight={"normal"} mb={2}>
                        {props.content}
                    </Text>
                </Box>
            </Flex>
        </Grid>
    );
}

export default ReplyFeature;