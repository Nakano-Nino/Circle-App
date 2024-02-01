import { API } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetReply() {
    const { id } = useParams();
    
    const {
        data: getReplies,
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["replies", id],
        // queryFn: async () => await API.get("/threads").then((res) => res.data),
        queryFn: async () => {
            const { data } = await API.get(`/replies/${id}`);
            return data;            
        },
        // refetchInterval: 100

    });
    return { getReplies, refetch, isLoading };
}