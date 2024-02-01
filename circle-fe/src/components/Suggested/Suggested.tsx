import { Box, Card, Stack, Text, Avatar } from "@chakra-ui/react"
import SuggestedBase from "@/features/suggested/components/SuggestedBase"
import { useEffect, useState } from "react"
import { API } from "@/config/api"

function SuggestedComponent() {
    const [users, setUsers] = useState([])

    async function getUsers() {
        const result = await API.get("/users")
        setUsers(result.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Card bg="whiteAlpha.200" p={4} >
            <Text color="white">Suggested for you</Text>
            <Box mt={3}>
                <Stack>
                    {users.slice(0, 5).map((e: any) => (
                        <SuggestedBase full_name={e.full_name} status="Follow" username={e.username} image={e.photo_profile} />
                    ))}
                </Stack>
            </Box>
        </Card>
    )
}

export default SuggestedComponent