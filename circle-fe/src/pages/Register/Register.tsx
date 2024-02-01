import { Box, Text } from "@chakra-ui/react";
import FormRegister from "@/features/auth/components/FormRegister";
import { useNavigate } from "react-router-dom";
export default function Register() {
	const navigate = useNavigate();
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"white"}>
			<FormRegister />
			<Box display={"flex"} gap={2}>
				<Text>Already have account?</Text>
				<Text
					color={"green"}
					cursor={"pointer"}
					onClick={() => navigate("/login")}>
					Login
				</Text>
			</Box>
		</Box>
	);
}
