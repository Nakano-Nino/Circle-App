import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react";
import { FormLoginHook } from "../hooks/FormLoginHook";

export default function FormLogin() {
	const { handleChange, handleLogin } = FormLoginHook();

	return (
		<FormControl
			isRequired
			display={"flex"}
			flexDirection={"column"}
			gap={3}
			width={"350px"}
			bg={"transparent"}
			color={"white"}
			border={"1px solid white"}
			borderRadius={10}
			padding={5}	
			onClick={handleLogin}
		>

			<Text color="green" fontSize={"2xl"} fontWeight={"bold"}>
				CiRCLE
			</Text>

			<Text fontSize={"2xl"} fontWeight={"bold"}>
				Login to CiRCLE
			</Text>

			<Input
				placeholder="Username"
				name="username"
				onChange={handleChange}
			/>

			<Input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
			/>

			<Box display="flex" justifyContent={"flex-end"}>

				<Text>Forgot password?</Text>

			</Box>

			<Button
				backgroundColor={"green"}
				colorScheme="green"
				color={"white"}
				type="submit"
				>
				Login
			</Button>

		</FormControl>
	);
}
