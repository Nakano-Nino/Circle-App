// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useNavigate } from "react-router-dom";
// import { useGetThreadDetail } from "@/features/threaddetail/hooks/GetThreadDetailHook";
// import {
// 	AbsoluteCenter,
// 	Avatar,
// 	Box,
// 	Button,
// 	Divider,
// 	HStack,
// 	Heading,
// 	Image,
// 	Text,
// } from "@chakra-ui/react";
// import { BiMessageAltDetail } from "react-icons/bi";
// import { BsDot, BsHeart } from "react-icons/bs";
// import FormReplyFeature from "@/features/reply/components/FormReplyFeature";

// export default function ThreadDetailFeature() {
// 	const navigate = useNavigate();

// 	const { getThreadDetail, isLoading } = useGetThreadDetail();

// 	if (isLoading) {
// 		return <div>Loading...</div>;
// 	}

// 	return (
// 		// <>
// 		// 	<Text fontSize={"2xl"} color={"white"}>
// 		// 		Thread Replies
// 		// 	</Text>
// 		// </>

// 		<Box>
// 			<Box color={"gray.100"}>
// 				<Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
// 					<Heading size="xl" pb={8}>
// 						Thread Replies
// 					</Heading>
// 					<Button onClick={() => navigate(-1)}>Back</Button>
// 				</Box>
// 				<HStack>
// 					<Box>
// 						<HStack>
// 							<Avatar
// 								name={getThreadDetail.user.full_name}
// 								src={getThreadDetail.user.profile_picture}
// 								size="sm"
// 								mr="3"
// 								_hover={{
// 									cursor: "pointer",
// 								}}
// 							/>
// 							<Box display={"flex"} alignItems={"center"} gap={1}>
// 								<Text
// 									fontWeight="semibold"
// 									fontSize={"md"}
// 									_hover={{
// 										cursor: "pointer",
// 									}}
// 								>
// 									{getThreadDetail.user.full_name}
// 								</Text>
// 								<Text
// 									ml={1} fontWeight="light" display="flex" color="whiteAlpha.600" fontSize={"xs"} alignItems={"center"}
// 								>
// 									@{getThreadDetail.user.username}
// 								</Text>
// 							</Box>
// 							<Text color="gray.600">&bull;</Text>
// 							<Box>
// 								{/* <chakra.time fontSize="2xs" color="gray.400">
// 									{formattedDate}
// 								</chakra.time> */}
// 							</Box>
// 						</HStack>
// 						<Box ms="3rem">
// 							{getThreadDetail.image && (
// 								<Box mt="0.5rem">
// 									<Image
// 										boxSize="300px"
// 										objectFit="cover"
// 										src={getThreadDetail.image}
// 										alt="Dan Abramov"
// 										rounded="md"
// 									/>
// 								</Box>
// 							)}

// 							<Box my="10">
// 								<Text fontSize="xl">{getThreadDetail.content}</Text>
// 							</Box>
// 							<Box>
// 								<HStack fontSize="xs">
// 									<HStack>
// 										<BsHeart />
// 										<Text>{getThreadDetail.likes.length}</Text>
// 									</HStack>

// 									<HStack>
// 										<BiMessageAltDetail />
// 										<Text>{getThreadDetail.replies.length} Replies</Text>
// 									</HStack>
// 								</HStack>
// 							</Box>
// 						</Box>
// 					</Box>
// 				</HStack>

// 				<Box position="relative" padding="10">
// 					<Divider />
// 					<AbsoluteCenter bg="gray.800" px="4">
// 						Replies
// 					</AbsoluteCenter>
// 				</Box>
// 			</Box>
// 			<FormReplyFeature threadReply={getThreadDetail} />
// 		</Box>
// 		);
// 	}




// //... /* eslint-disable @typescript-eslint/no-unused-vars */
// // import { Avatar, Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
// // import { BsDot } from "react-icons/bs";
// // import { AiFillHeart } from "react-icons/ai";
// // import { BiCommentDetail } from "react-icons/bi";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useGetThreadDetail } from "../hooks/GetThreadDetailHook";
// // import FormReply from "@/features/reply/components/FormReplyFeature";
// // import ReplyFeature from "@/features/reply/components/ReplyFeature";
// // import FormReplyFeature from "@/features/reply/components/FormReplyFeature";


// // function ThreadDetailFeature() {
// //     const navigate = useNavigate();
// //     const { getThreadDetail, isLoading } = useGetThreadDetail();



// //     const [like, setLike] = useState(false);

// //     function handleLike() {
// //         setLike(!like);
// //     }

// //     if (isLoading) {
// //         return <p>Loading...</p>
// //     }

// //     console.log(getThreadDetail)
// //     return (
// //         <>
// //             <Grid>
// //                 <Flex gap={3} borderBottom='1px solid gray' mt={100} mb={50} p={5} border={"1px solid grey"} borderRadius={"10px"}>
// //                     <Avatar size="md" src={getThreadDetail.user?.profile_picture} />
// //                     <Box mb={4}>
// //                         <HStack>
// //                             <Text
// //                                 display="flex"
// //                                 gap={1}
// //                                 fontSize="xl"
// //                                 fontWeight="medium"
// //                                 color="whiteAlpha.800"
// //                                 cursor='pointer'
// //                             >
// //                                 {getThreadDetail.user?.full_name}

// //                                 <Text fontWeight="light" display="flex" color="whiteAlpha.600" fontSize={"sm"} alignItems={"center"}>
// //                                     @{getThreadDetail.user?.username} <BsDot color="gray" size={24} />
// //                                     {/* {time} */}
// //                                 </Text>
// //                             </Text>
// //                         </HStack>

// //                         <Text fontSize="xl" color="whiteAlpha.800" fontWeight={"normal"} mb={5} mt={5}>
// //                             {getThreadDetail.content}
// //                         </Text>

// //                         {getThreadDetail.image && <Image src={getThreadDetail.image} />}

// //                         <HStack spacing={6}>
// //                             <HStack
// //                                 onClick={handleLike}
// //                                 cursor="pointer"
// //                                 color="whiteAlpha.600"
// //                                 mt={2}
// //                             >
// //                                 <AiFillHeart size={20} color={like ? "red" : ""} />
// //                                 <Text fontSize="sm" color="whiteAlpha.600">
// //                                     {getThreadDetail.likes?.length}
// //                                 </Text>
// //                             </HStack>

// //                             <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
// //                                 <BiCommentDetail size={20} />
// //                                 <Text fontSize="sm" color="whiteAlpha.600">
// //                                     {getThreadDetail.replies?.length}
// //                                 </Text>
// //                             </HStack>

// //                         </HStack>

// //                     </Box>

// //                 </Flex>
// //                 <Flex >
// //                     <Box width={"full"}>
// //                         <HStack >
// //                             <FormReplyFeature />
// //                         </HStack>
// //                         <HStack >
// //                             <ReplyFeature />
// //                         </HStack>
// //                     </Box>
// //                 </Flex>

// //             </Grid>
// //         </>

// //     );
// // }

// // export default ThreadDetailFeature;




// // import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
// // import { BsDot } from "react-icons/bs";
// // // import { AiFillHeart } from "react-icons/ai";
// // import { BiCommentDetail } from "react-icons/bi";
// // // import { useState } from "react";

// // interface IProps {
// //     imgProfile?: string;
// //     name?: string;
// //     username?: string;
// //     content?: string;
// //     likes?: number;
// //     comment?: number;
// //     time?: string;
// //     onClick?: () => void


// // function ThreadDetailFeature(props: IProps) {

// //     const { comment, content, imgProfile, likes, name, username, time, onClick } = props;

// //     // const [like, setLike] = useState(false);
// //     // function handleLike() {
// //     //     setLike(!like);
// //     return (
// //         <>

// //             <Flex gap={3} borderBottom='1px solid gray' >
// //                 <Avatar size="sm" name="Dan Abrahmov" src={imgProfile} />
// //                 <Box mb={4}>
// //                     <HStack>
// //                         <Text
// //                             display="flex"
// //                             gap={1}
// //                             fontSize="sm"
// //                             fontWeight="semibold"
// //                             color="whiteAlpha.800"
// //                             onClick={onClick}
// //                             cursor='pointer'
// //                         >
// //                             {name}
// //                             <Text fontWeight="light" display="flex" color="whiteAlpha.600">
// //                                 {username} <BsDot color="gray" size={24} />
// //                                 {time}
// //                             </Text>
// //                         </Text>
// //                     </HStack>
// //                     <Text fontSize="xs" color="whiteAlpha.800" fontWeight='light'>
// //                         {content}
// //                     </Text>
// //                     <HStack spacing={6}>
// //                         <HStack
// //                             // onClick={handleLike}
// //                             cursor="pointer"
// //                             color="whiteAlpha.600"
// //                             mt={2}
// //                         >
// //                             {/* <AiFillHeart size={20} color={like ? "red" : ""} /> */}
// //                             <Text fontSize="sm" color="whiteAlpha.600">
// //                                 {likes}
// //                             </Text>
// //                         </HStack>
// //                         <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
// //                             <BiCommentDetail size={20} />
// //                             <Text fontSize="sm" color="whiteAlpha.600">
// //                                 {comment}
// //                             </Text>
// //                         </HStack>
// //                     </HStack>
// //                 </Box>
// //             </Flex>
// //             );

// //         </>
// //     )
// // }


// // export default ThreadDetailFeature

import ThreadDetail from "@/features/threads/components/ThreadDetail";
import ReplyForm from "@/features/threads/components/ReplyForm";
import ReplyFeature from "@/features/reply/components/ReplyFeature";
import { Replies } from "@/types/ReplyType";
import { useGetReply } from "@/features/reply/hooks/GetReplyHook";

function ThreadDetailFeature() {

    return (
        <>
            <ThreadDetail />
                <ReplyForm />
        </>
    )
}

export default ThreadDetailFeature