import { FormControl, Input, Text, Button } from "@chakra-ui/react";
import { FormRegisterHook } from "../hooks/FormRegisterHook";

export default function FormRegister() {
    const { handleChange, handleRegister } = FormRegisterHook();

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
        >

            <Text color={"brand.green"} fontSize={"2xl"} fontWeight={"bold"}>
                Connect
            </Text>

            <Text fontSize={"2xl"} fontWeight={"bold"}>
                Create Account Connect
            </Text>

            <Input
                placeholder="Full name"
                name="full_name"
                onChange={handleChange}
            />

            <Input placeholder="Username" name="username" onChange={handleChange} />

            <Input placeholder="Email" name="email" onChange={handleChange} />

            <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
            />

            <Button
                backgroundColor={"green"}
                colorScheme="green"
                color={"white"}
                onClick={handleRegister}>
                Create
            </Button>

        </FormControl>
    );
}
