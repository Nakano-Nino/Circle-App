import { API } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { Replies } from "@/types/ReplyType";
import { PostReply } from "@/types/ReplyType";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export function useReply() {
    const params = useParams()
    const [ form, setForm ] = useState<PostReply>({
        content: "",
        image: "",
    })

    async function getReply() {
        try {
            
            const res = await API.get(`/replies/${params.id}`)
            return res.data
        } catch (error) {
            throw new Error
        }
    }

    const { data: replies, refetch } = useQuery({ queryKey: ['replies'], queryFn: getReply })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = e.target

        if (files) {
            setForm({
                ...form,
                [name]: files[0]
            })
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }

    const fileInputRef = useRef<HTMLInputElement>(null)

    function handleButtonClick() {
        fileInputRef.current?.click()
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        let formData = new FormData()

        formData.append("content", form.content)
        formData.append("image", form.image as File)

        API.post(`/replies/${params.id}`, formData)
        refetch()
        setForm({
            content: "",
            image: ""
        })
    }

    return { form, replies, handleChange, fileInputRef, handleSubmit, handleButtonClick }
}
