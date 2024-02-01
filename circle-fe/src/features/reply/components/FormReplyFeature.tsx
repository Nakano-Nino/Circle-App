import {
	Avatar,
	Box,
	Button,
	Divider,
	FormControl,
	HStack,
	Image,
	Input,
	Text,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { usePostReply } from "../hooks/PostReplyHook";
import { FormReplyType } from "@/types/FormReplyType";

type RepliesProps = {
	threadReply: {
		replies: FormReplyType[];
	};
};


export default function FormReplyFeature({ threadReply }: RepliesProps) {
	const user = useSelector((state: RootState) => state.auth);
	const {
		handleButtonClick,
		handleChange,
		handlePost,
		setImage,
		isPending,
		fileInputRef,
		form,
	} = usePostReply();
	// const [isModalOpen, setIsModalOpen] = useState(false);
	// const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			<form encType="multipart/form-data">
				<FormControl mb={15}>
					<HStack
						mt={5}
						p={15}
						justify="space-between"
						border={"1px solid white"}
						borderRadius={"full"}>
						<HStack w={"full"}>
							<Avatar
								size="sm"
								mr={3}
								name={user.full_name}
								src={user.photo_profile}
							/>
							<Input
								variant="unstyled"
								color="whiteAlpha.400"
								placeholder="Reply to this thread!"
								_focus={{ color: "white" }}
								name="content"
								onChange={handleChange}
								value={form.content}
							/>
						</HStack>
						<HStack>
							<Box cursor="pointer">
								<BiImageAdd
									size={25}
									color="green"
									onClick={handleButtonClick}
								/>
								<Input
									type="file"
									name="image"
									onChange={(e) => {
										if (e.target?.files) {
											setImage(e.target?.files[0]);
										} else {
											setImage(null);
										}
									}}
									style={{ display: "none" }}
									ref={fileInputRef}
								/>
							</Box>
							<Button
								colorScheme="whatsapp"
								size="xs"
								px={3}
								rounded="full"
								onClick={() => handlePost()}
								isLoading={isPending}>
								Post
							</Button>
						</HStack>
					</HStack>
				</FormControl>
			</form>
			{threadReply.replies?.map((reply: FormReplyType) => (
				<Box key={reply.id} px="12" pt="3">
					<Box display="flex" gap="8px">
						<Avatar
							name={reply.users?.full_name}
							src={reply.users?.photo_profile}
							size="sm"
							mr="3"
							_hover={{
								cursor: "pointer",
							}}
						/>
						<Text fontWeight="semibold" fontSize="xs" color={"white"}>
							{reply.users?.full_name}
						</Text>
					</Box>
					<Box px={12} py={3}>
						{reply.image && (
							<Image
								src={reply.image}
								boxSize="200px"
								objectFit="cover"
								alt="Dan Abramov"
								rounded="md"
								mb={3}
								// onClick={() => {
								// 	setIsModalOpen(true);
								// 	setSelectedImage(reply.image);
								// }}
							/>
						)}
						<Text color={"white"} fontSize="xs">
							{reply.content}
						</Text>
					</Box>
					<Divider />
					{/* {isModalOpen && selectedImage && (
						<Modal onClose={() => setIsModalOpen(false)}>
							<ModalOverlay />
							<ModalContent>
								<ModalCloseButton />
								<Image src={selectedImage} alt="Selected Image" />
							</ModalContent>
						</Modal>
					)} */}
				</Box>
			))}
		</>
	);
}



// import { Avatar, Box, Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
// import { usePostThread } from '@/features/thread/hooks/PostThreadHook';
// import { BiImageAdd } from 'react-icons/bi';

// function FormReplyFeature() {
//     const { handleChange, handlePost, isOpen, onOpen, onClose, user, setImage } = usePostThread();
    

//     return (
//         <>
//             <HStack mt={5} mb={50} paddingBottom={5} justify="space-between" borderBottom={"1px solid grey"} height={"50px"} width={"full"}>

//                 <HStack>
//                     <Avatar size="md" mr={3} name={user?.full_name} src={user?.profile_picture} />
//                     <Input
//                         variant="unstyled"
//                         color="whiteAlpha.400"
//                         placeholder="What is happening?!"
//                         _focus={{ color: 'white' }}
//                         name="content"
//                         onChange={handleChange}
//                         fontSize={"2xl"}
//                     />
//                 </HStack>

//                 <HStack>
//                     <Box cursor="pointer" onClick={onOpen}>
//                         <BiImageAdd size={40} color="green" />
//                     </Box>
//                     <Button colorScheme="whatsapp" size="md" px={5} py={0} rounded="full" onClick={()=>{handlePost()}}>
//                         Post
//                     </Button>
//                 </HStack>

//             </HStack>

//             <Modal isOpen={isOpen} onClose={onClose} >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Upload Image</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Input
//                             marginLeft={2}
//                             variant={"unstyled"}
//                             type="file"
//                             name="image"
//                             onChange={(e) => {
//                                 if (e.target?.files) {
//                                     setImage(e.target?.files[0])
//                                 } else {
//                                     setImage(null)
//                                 }
//                             }}
//                         />
//                     </ModalBody>
//                     <ModalFooter gap={3}>
//                         {/* <Button colorScheme='green' onClick={handlePost}>Post</Button>
//                         <Button colorScheme='orange' onClick={onClose}>Close</Button> */}
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }

// export default FormReplyFeature