import SearchFeature from "@/features/search/components/SearchFeature"
import { useGetUser } from "@/features/search/hooks/getUserHook"
import { UserType } from "@/types/UserType"
import { useEffect, useState } from "react"

function SearchUser() {

    return (
        <>
            <SearchFeature />
        </>
    )
}

export default SearchUser