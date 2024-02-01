import { API } from "@/config/api";
import { useQuery } from "@tanstack/react-query";

export function useGetThread() {
	const {
		data: getThread,
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["thread"],
		// queryFn: async () => await API.get("/threads").then((res) => res.data),
		queryFn: async () => {
			const { data } = await API.get("/thread");
			return data;
		},
	});
	return { getThread, refetch, isLoading };
}
