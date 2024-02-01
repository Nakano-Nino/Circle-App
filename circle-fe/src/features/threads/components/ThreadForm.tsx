import {
	Avatar,
	Box,
	Button,
	FormControl,
	HStack,
	Input,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { useThread } from "../hooks/useThread";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";

export default function ThreadForm() {
	const user = useSelector((state: RootState) => state.auth);
	const {
		form,
		fileInputRef,
		handleChange,
		handleButtonClick,
		handleSubmit
	} = useThread();

	// const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
	// 	if (event.key === "Enter") {
	// 		handlePost;
	// 	}
	// };

	return (
		<form onSubmit={handleSubmit} encType="multipart/form-data">
			<FormControl>
				<HStack
					mt={5}
					justify="space-between"
					mb={15}
					// bg={"#333333"}
					// border={"1px solid white"}
					p={5}
					ml={-5}
					>
					<HStack w={"full"}>
						<Avatar
							size="sm"
							mr={2}
							name={user.full_name}
							src={user.photo_profile}
						/>
						<Input
							variant="unstyled"
							color="whiteAlpha.400"
							placeholder="What is happening?!"
							_focus={{ color: "white" }}
							name="content"
							rounded={"10"}
							onChange={handleChange}
							value={form.content}	
							// onKeyDown={handleKeyDown}
						/>
					</HStack>
					<HStack>
						<Box cursor="pointer">
							<BiImageAdd size={25} color="green" onClick={handleButtonClick} />
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
							mr={-5}
							px={3}
							rounded="full"
							type="submit"
							// onClick={() => handlePost()}
							// isLoading={isPending}
							>
							Post
						</Button>
					</HStack>
				</HStack>
			</FormControl>
		</form>
	);
}
