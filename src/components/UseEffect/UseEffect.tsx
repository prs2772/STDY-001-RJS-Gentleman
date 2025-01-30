import { useCallback, useEffect, useState } from 'react'

export const UseEffect = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const consoleLoader = useCallback((loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loading)
  }, [loading])

  const fetchData = useCallback(async () => {
    consoleLoader(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      const jsonData = await response.json();

      setData(jsonData)
    } catch (error) {
      setError(error as string)
    } finally {
      consoleLoader(false)
    }
  }, [consoleLoader])

  // Sync con entidaes externas
  // Parámetros de entrada
  // Context

  useEffect(() => {
    // 1 - Cuando se monta el componente
    // 2 - Cuando se modifica uno de los valores del state
    fetchData()
    return () => {
      // Manejo de la memoria, al desmontar el componente
    }
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...</div>
  }

  return () => {
    <div>{JSON.stringify(data)}</div>
  }
}
