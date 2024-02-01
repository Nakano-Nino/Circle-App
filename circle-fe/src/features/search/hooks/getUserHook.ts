import { useQuery } from '@tanstack/react-query';
import { API } from '@/config/api';
import { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { UserType } from '@/types/UserType';

export function useGetUser() {
    const [userList, setUserList] = useState<UserType[]>()
    const [user, setUser] = useState("")

    async function getUser() {
        try {
            const res = await API.get('/users')
            setUserList(res.data)
            return res.data
        } catch (error) {
            throw new Error
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const { data: users, refetch } = useQuery({ queryKey: ['users'], queryFn: getUser })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value)
    }

    function handleSearch() {
        const findUser = userList?.filter((u) => u?.username.toLowerCase().includes(user.toLowerCase()))
        setUserList(findUser)
    }

    const handleOnKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return { users, handleChange, handleSearch, refetch, handleOnKeyDown, getUser }
}