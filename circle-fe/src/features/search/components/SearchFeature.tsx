import { HStack, Input, Icon, InputGroup, InputLeftElement, Divider, Avatar, Text, Button, Stack, InputRightElement } from "@chakra-ui/react";
import { TbUserSearch } from "react-icons/tb";
import { useGetUser } from "../hooks/getUserHook";
import { useState } from "react";
import { UserType } from "@/types/UserType";

export default function SearchFeature() {
    const { handleOnKeyDown, users } = useGetUser()
    const [ searchInput, setSearchInput ] = useState("")
    const [ filteredResults, setFilteredResults ] = useState<UserType[]>([])
    
    const searhUser = (searchValue) => {
        setSearchInput(searchValue)
        const filteredUser = users.filter((user) => {
            return Object.values(user).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredUser)
        console.log(filteredResults);
        
    }

    return (
        <>
            <HStack mt={5}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={TbUserSearch} color='gray.300' />
                    </InputLeftElement>
                    <Input
                        type="text"
                        border={0}
                        borderRadius="full"
                        placeholder="Search user"
                        bg={"whiteAlpha.200"}
                        color={"white"}
                        name={"username"}
                        onChange={(e) => searhUser(e.target.value)}
                        onKeyDown={handleOnKeyDown}
                    />
                    {/* <InputRightElement>
                        <Button
                            bg="transparent"
                            border={0}
                            color="white"
                            _hover={{bg: 'transparent', color: 'whiteAlpha.600'}}
                            mr={20}
                            onClick={() => setUname(!uname)}  
                        >
                            {uname ? 'Username' : 'Fullname'}
                        </Button>
                    </InputRightElement> */}
                </InputGroup>
            </HStack>
            <HStack py={5} display={"flex"} flexDirection={"column"} gap={5}>
                {searchInput.length > 1 ? (
                    filteredResults.map((user) => (
                            <HStack justify='space-between' w={"full"}>
                                <HStack spacing={3}>
                                    <Avatar size="md" src={user.photo_profile} />
                                    <Stack spacing={-4}>
                                        <Text fontSize='xs' color='white' fontWeight={"bold"}>{user.full_name}</Text>
                                        <Text color='whiteAlpha.600' fontSize='xs'>@{user.username}</Text>
                                        <Text color={'white'} fontSize='xs'>{user.bio}</Text>
                                    </Stack>
                                </HStack>
                                <Button _hover={{ bg: 'whatsapp' }} variant='outline' rounded='full' color='whiteAlpha.700' size='sm'>Follow</Button>
                            </HStack>
                    ))
                ) : (
                    users?.map((user: any) => (
                        <HStack justify='space-between' w={"full"}>
                            <HStack spacing={3}>
                                <Avatar size="md" src={user.photo_profile} />
                                <Stack spacing={-4}>
                                    <Text fontSize='xs' color='white' fontWeight={"bold"}>{user.full_name}</Text>
                                    <Text color='whiteAlpha.600' fontSize='xs'>@{user.username}</Text>
                                    <Text color={'white'} fontSize='xs'>{user.bio}</Text>
                                </Stack>
                            </HStack>
                            <Button _hover={{ bg: 'whatsapp' }} variant='outline' rounded='full' color='whiteAlpha.700' size='sm'>Follow</Button>
                        </HStack>
                    ))
                )}
            </HStack>
        </>
    )
}