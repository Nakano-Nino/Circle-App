import { API } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetThreadDetail() {
    const {id} = useParams();
    
    const {
        data: getThreadDetail,
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["threadDetail",id],
        // queryFn: async () => await API.get("/threads").then((res) => res.data),
        queryFn: async () => {
            const { data } = await API.get(`/thread/${id}`);
            return data;
        },
        // refetchInterval: 100

    });
    return { getThreadDetail, refetch, isLoading };
}
