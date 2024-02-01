import { API } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { ThreadPost } from "@/types/ThreadType";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export function useThread() {
    const [ form, setForm ] = useState<ThreadPost>({
        content: "",
        image: ""
    })

    async function getThreads() {
        try {
            const res = await API.get('/thread')
            return res.data
        } catch (error) {
            throw new Error
        }
    }

    const { data: threads, refetch } = useQuery({ queryKey: ['threads'], queryFn: getThreads })

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

        API.post('/thread', formData)
        refetch()
        setForm({
            content: "",
            image: ""
        })
    }

    return { form, threads, handleChange, fileInputRef, handleSubmit, handleButtonClick }
}