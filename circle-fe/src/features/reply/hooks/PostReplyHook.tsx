import { PostReply } from "@/types/ReplyType";
import { API } from "@/config/api";
import { RootState } from "@/store/type/RootState";
import { useDisclosure } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useToast } from "@/features/threads/hooks/useToast";

export function usePostReply() {
	const {id} = useParams();
	const toast = useToast();
	const [form, setForm] = useState<PostReply>({
		thread: Number(id),
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
			[e.target.name]: e.target.files ? e.target.files : e.target.value,
		});
	}

	const { mutate: handlePost, isPending } = useMutation({
		mutationFn: async () => {
			const formData = new FormData();
			if (image) {
				formData.append("image", image);
			}
			formData.append("thread_id", String(form.thread));
			formData.append("content", String(form.content));
			await API.post("/reply", formData);
		},
		onSuccess: () => {
			QueryClient.invalidateQueries({ queryKey: ["replies"] });
			setForm({
				thread: Number(id),
				content: "",
			});
			setImage(null);
		},

	});

	const { isOpen, onOpen, onClose } = useDisclosure();

	const user = useSelector((state: RootState) => state.auth);

	return {
		handleButtonClick,
		handleChange,
		handlePost,
		fileInputRef,
		isPending,
		setImage,
		isOpen,
		onOpen,
		onClose,
		user,
		form,
		toast
	};
}
