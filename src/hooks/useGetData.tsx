import { useEffect, useState } from "react"

export default function useGetData({ data }) {
    const [loadDate, setData] = useState(null)
    const [loading, setloading] = useState<boolean>(false)
	useEffect(() => {
        setloading(true)
		setData(data)	
        setloading(false)  
	}, [data])

    return { loadDate, loading}
}