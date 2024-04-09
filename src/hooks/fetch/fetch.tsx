// import { get } from "@utils/util"
import { useEffect, useState } from "react"
import { get } from "src/utils/util"

export const useFetch = (url: string, body?: any) => {

    const [data, setData] = useState([])
    useEffect(() => {
        get(url).then(res => setData(res))
    }, [])

    return data;

}