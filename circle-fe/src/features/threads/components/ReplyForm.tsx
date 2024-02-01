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
import { useReply } from "../hooks/useReply";
import { Replies } from "@/types/ReplyType";
import { useGetReply } from "@/features/reply/hooks/GetReplyHook";

// type RepliesProps = {
// 	threadReply: {
// 		replies: Replies[];
// 	};
// };

export default function ReplyForm() {
	const users = useSelector((state: RootState) => state.auth);
	const {
		form,
		replies,
		fileInputRef,
		handleChange,
		handleButtonClick,
		handleSubmit
	} = useReply();

	const { getReplies, isLoading } = useGetReply();    
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

	return (
		<>
			<form onSubmit={handleSubmit} encType="multipart/form-data">
				<FormControl mb={15}>
					<HStack
						pt={5}
						justify="space-between"
						// border={"1px solid white"}
						borderRadius={"full"}>
						<HStack w={"full"}>
							<Avatar
								size="sm"
								mr={3}
								name={users.full_name}
								src={users.photo_profile}
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
									onChange={handleChange}
									style={{ display: "none" }}
									ref={fileInputRef}
								/>
							</Box>
							<Button
								colorScheme="whatsapp"
								size="xs"
								px={3}
								rounded="full"
								type="submit"
							>
								reply
							</Button>
						</HStack>
					</HStack>
					<Box position="relative" pt={5}>
						<Divider />
					</Box>
				</FormControl>
			</form>
			{replies.map((reply: Replies) => (
				<Box px="0" pt="3">
					<Box display="flex" gap="8px">
						<Avatar
							name={reply.users.full_name}
							src={reply.users.photo_profile}
							size="sm"
							mr="3"
							_hover={{
								cursor: "pointer",
							}}
						/>
						<Text fontWeight="semibold" fontSize="xs" color={"white"}>
							{reply.users.full_name}
						</Text>
						<Text color="gray.600" fontSize="xs">
							@{reply.users.username}
						</Text>
					</Box>
					<Box px={12} pb={3}>
						{reply.image && <Image src={reply.image} />}

						<Text color={"white"} fontSize="xs">
							{reply.content}
						</Text>
					</Box>
					<Divider />
				</Box>
			))}
		</>
	);
}
