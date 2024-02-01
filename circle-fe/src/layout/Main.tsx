import {
    Box,
    Card,
    Flex,
    Grid,
    GridItem,
    Image,
    Text,
} from "@chakra-ui/react";
import NavbarComponent from "@/components/Navbar/Navbar";
import ProfileComponent from "@/components/ProfilePage/Profile";
import SuggestedComponent from "@/components/Suggested/Suggested";

import { BsDot, BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Outlet } from "react-router-dom";


function Home() {
    return (
        <Grid gridTemplateColumns="270px 1.5fr 1.1fr" bg="blackAlpha.800" minH="100vh" >
            
            <GridItem px={6} py={4} borderRight="1px solid gray">
                <NavbarComponent />
            </GridItem>

            <GridItem px={6} py={4} borderRight="1px solid gray">
                <Outlet />
            </GridItem>
            
            <GridItem px={6} py={4} >
                <ProfileComponent />
                <Box mt={4}>
                    <SuggestedComponent />

                    <Card mt={4} bg="whiteAlpha.200" p={3}>
                        <Flex>
                            <Text display="flex" fontSize="sm" gap={1} color="whiteAlpha.800">
                                Developed by <Text color="white">Yudha Prastyo</Text>
                            </Text>
                            <Flex gap="3px" color="gray">
                                <BsDot size={24} />
                                <AiFillGithub size={20} />
                                <AiFillLinkedin size={20} />
                                <BsFacebook size={20} />
                                <AiFillInstagram size={20} />
                            </Flex>
                        </Flex>
                        <Text
                            fontSize="x-small"
                            color="whiteAlpha.600"
                            display="flex"
                            gap={2}
                        >
                            Powered by <Image w="30px" src="src/assets/logo.png" alt="logo" />{" "}
                            Dumbways Indonesia #1Coding Bootcamp
                        </Text>
                    </Card>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Home;
