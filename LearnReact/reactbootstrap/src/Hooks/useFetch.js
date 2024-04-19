import React, { useEffect, useState } from 'react'
export function useFetch(url) {
    const [data, setData] = useState([])
    const[error,setError]=useState(null);
    useEffect(() => {
        const getdata = async () => {
            try {
                let response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${response.status}`)
                }

                let result = await response.json();
                {
                    setData(result);
                }

            }
            catch (error) {
                console.log(error)
                setError(error.message);
            }
        }
        getdata();

    }, [url])

    return {data,error};

}
