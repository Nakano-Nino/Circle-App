import { API } from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function usePostLike() {
	const queryClient = useQueryClient();
	
	const { mutate: handleLike } = useMutation({
		mutationFn: () => {
			return API.post("/like",);
		}
	})
}
