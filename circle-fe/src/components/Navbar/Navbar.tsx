import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_LOGOUT } from "@/store/slice/AuthSlice";
import { useQueryClient } from "@tanstack/react-query";

function NavbarComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    function handleLogout() {
        // dispatch({ type: AUTH_LOGOUT });
        dispatch(AUTH_LOGOUT());
        navigate("/login");
    }

    function handleHome() {
        navigate("/");
        queryClient.invalidateQueries({ queryKey: ["threads"] });
    }

    return (
        <Stack h="full" justify="space-between" position={"fixed"}>

            <Box>
                <Heading color="green">CiRCLE</Heading>

                <Stack mt={8} spacing={6}>

                    <HStack cursor="pointer" color="white" onClick={() => handleHome()}>
                        <AiOutlineHome size={25} />
                        <Text fontSize="sm  ">Home</Text>
                    </HStack>
                    <HStack cursor="pointer" color="white" onClick={() => navigate("/search")}>
                        <TbUserSearch size={25} />
                        <Text fontSize="sm  ">Search</Text>
                    </HStack>
                    <HStack cursor="pointer" color="white">
                        <AiOutlineHeart color="transparant" size={25} />
                        <Text fontSize="sm  ">Follows</Text>
                    </HStack>
                    <HStack cursor="pointer" color="white">
                        <AiOutlineUser size={25} />
                        <Text fontSize="sm  ">Profile</Text>
                    </HStack>

                    <Button size='sm' rounded="full" colorScheme="whatsapp">
                        Create Post
                    </Button>
                    
                </Stack>

            </Box>

            <Button
                fontWeight="light"
                color="white"
                display="flex"
                justifyContent="start"
                mb={10}
                leftIcon={<BiLogOut size={30} />}
                colorScheme="teal"
                variant="unstyled"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Stack>
    );
}

export default NavbarComponent;
