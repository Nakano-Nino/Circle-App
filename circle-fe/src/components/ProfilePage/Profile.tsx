import { Avatar, Box, Button, Card, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import { useAppSelector } from "@/store/hook";
import { RootState } from "@/store/Store";

function ProfileComponent() {
    const user = useAppSelector((state: RootState) => state?.auth);
    return (
        <Card bg="whiteAlpha.200" p={4}>
            <Text color="white">My Profile</Text>
            <Box
                pos="relative"
                h="70px"
                mt={3}
                rounded="xl"
                bgImage= {"https://genshin.honeyhunterworld.com/img/furina_089_gacha_splash.webp?x76042"}
            >
                <Box
                    pos="absolute"
                    bottom={-6}
                    left={4}
                    p={1}
                    bg="blackAlpha.800"
                    rounded="full"
                >
                    <Avatar size="md" name={user.full_name} src={user.photo_profile} />
                </Box>
            </Box>
            <Flex justify="right" mt={-6}>
                <Button
                    color="white"
                    size="xs"
                    rounded="full"
                    variant="outline"
                    mt={8}
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Edit Profile
                </Button>
            </Flex>

            <Stack spacing={0}>
                <Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
                    ✨{user.full_name}✨
                </Text>
                <Text fontSize='xs' color='whiteAlpha.600'>@{user.username}</Text>
                <Text fontSize='sm' color='whiteAlpha.800'>{user.bio}</Text>
                <HStack fontSize='sm'>
                    <HStack>
                        <Text color='whiteAlpha.800'>500</Text>
                        <Text color='whiteAlpha.600'>Following</Text>
                    </HStack>
                    <HStack>
                        <Text color='whiteAlpha.800'>5000</Text>
                        <Text color='whiteAlpha.600'>Followers</Text>
                    </HStack>
                </HStack>
            </Stack>
        </Card>
    )
}

export default ProfileComponent