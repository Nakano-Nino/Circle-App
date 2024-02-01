import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useEffect, useState } from "react";
import { ThreadType } from "@/types/ThreadType";
import getPostedTime from "@/utils/getPostedTime";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "@/config/api";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "@/store/slice/AuthSlice";
// import { LikeType } from "@/types/LikeType";

function ThreadBase(props: ThreadType) {
    const { id, image, content, replies, likes, users  } = props
    const auth = useSelector((state: RootState) => state.auth)
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes?.length)
    const [likeId, setLikeId] = useState({
        threadId: props.id,
        userId: auth.id
    })

    const queryClient = useQueryClient();
    const dispatch = useDispatch()
	
	const { mutate: handleLike } = useMutation({
		mutationFn: () => {
			if (!liked) {
                return API.post(`/like`, likeId)
            }
            return API.delete(`/like/${likeId.threadId}`)
		},
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ["threads"] })
            const res = await API.get(`/user/check`)
            dispatch(AUTH_CHECK(res.data))
            setLiked(!liked)
        },
        onError: (err) => {
            console.log(err);
            
        }
	})

    useEffect(() => {
        if (likes) {
            likes.map((like) => {
                if (like.users.id === auth.id) {
                    setLiked(true)
                }
            })
        }
    }, [likes, auth.id]) 

    function handleClick() {
        setLikeId({
            threadId: props.id,
            userId: auth.id
        })
        if (liked) {
            setLikeCount(likeCount - 1)
        } else {
            setLikeCount(likeCount + 1)
        }
        handleLike()
    }

    return (
        <>
        <Flex gap={3} borderBottom='1px solid gray' >

            <Avatar size="sm" src={users.photo_profile} />

            <Box mb={4}>
                <HStack>
                    <Text
                        display="flex"
                        gap={1}
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                        cursor='pointer'
                    >
                        {users.full_name}
                        <Text fontWeight="light" display="flex" color="whiteAlpha.600">
                            @{users.username} <BsDot color="gray" size={24} />
                            <Text>{getPostedTime(props.created_at)}</Text>
                        </Text>
                    </Text>
                </HStack>

                <Text fontSize="xs" color="whiteAlpha.800" fontWeight='light' mb={2}>
                    {content}
                </Text>

                <Link to={`/thread/${id}`}>
                {image && <Image src={image} />}
                </Link>

                <HStack spacing={6}>
                    <HStack
                        onClick={handleClick}
                        cursor="pointer"
                        color="whiteAlpha.600"
                        mt={2}
                    >
                        <AiFillHeart size={20} color={liked ? "red" : ""} />
                        {/* <AiFillHeart size={20} color={like ? "red" : ""} /> */}
                        <Text fontSize="sm" color="whiteAlpha.600">
                            {likeCount}
                        </Text>
                    </HStack>

                    <Link to={`/thread/${id}`}>
                    <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
                        <BiCommentDetail size={20} />
                        <Text fontSize="sm" color="whiteAlpha.600">
                            {replies.length}
                        </Text>
                    </HStack>
                    </Link>
                </HStack>

            </Box>

        </Flex>
        </>
    );
}

export default ThreadBase;