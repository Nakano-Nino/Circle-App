import { ThreadPost } from "@/types/ThreadType";
import { API } from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useRef, useState } from "react";

export function usePostThread() {
	const [form, setForm] = useState<ThreadPost>({
		content: "",
	});

	const QueryClient = useQueryClient();
	const fileInputRef = useRef<HTMLInputElement>(null);

	function handleButtonClick() {
		fileInputRef.current?.click();
	} 

	const [image, setImage] = useState<File | null>(null);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[e.target.name]: e.target.files ? e.target.files : e.target.value
		})
	}

	// function handlePost(event: FormEvent<HTMLFormElement>) {
	// 	event.preventDefault();
		
	// 	let formData = new FormData();

	// 	formData.append("content", form.content);
	// 	formData.append("image", form.image);
	
	// 	API.post("/thread", formData);
	// 	setForm({
	// 		content: "",
	// 		image: ""
	// 	})
	// }

	const { mutate: handlePost, isPending } = useMutation({
		mutationFn: async () => {
			const formData = new FormData();
			if (image) {
				formData.append("image", image as File);
			}
			formData.append("content", form.content);
			console.log(formData);
			
			await API.post("/thread", formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			});
		},
		onSuccess: () => {
			QueryClient.invalidateQueries({ queryKey: ["threads"] });
			setForm({
				content: "",
			});
			setImage(null);
		},
	});
	return {
		form,
		handleButtonClick,
		handleChange,
		handlePost,
		fileInputRef,
		isPending,
		setImage,
	};
}
