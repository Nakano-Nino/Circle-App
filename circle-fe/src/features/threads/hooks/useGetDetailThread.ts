import { API } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetDetailThread() {
	const { id } = useParams();
	const {
		data: getDetailThread,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["thread-reply", id],
		queryFn: async () => {
			const { data } = await API.get(`/thread/${id}`);
			return data;
		},
	});

	return {
		getDetailThread,
		isLoading,
		error,
	};
}
