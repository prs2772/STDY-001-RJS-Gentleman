import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data:  Data<T>;
    loading: boolean;
    error: ErrorType;
}

export function useFetch<T> (url: string): Params<T> {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, controller)
                if(!response.ok) {
                    throw new Error('Error en la petición');
                }
                const jsonData: T = await response.json();
                setData(jsonData)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();

        return () => {
            controller.abort();
        }
    }, [url])

    return {data, loading, error}
}

