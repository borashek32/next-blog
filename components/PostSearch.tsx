'use client'

import {FormEventHandler, useState} from "react"
import {usePosts} from "@/store"

export const PostSearch = () => {
    const [search, setSearch] = useState('')
    const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        await getPostsBySearch(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder={'Type something'} value={search}
                   onChange={event => setSearch(event.currentTarget.value)}/>
            <button type={'submit'}>Search</button>
        </form>
    )
}
