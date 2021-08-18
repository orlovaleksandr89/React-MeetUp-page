import { useState, useEffect } from 'react'

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options)
      const json = await res.json()

      setResponse(json)
    }

    fetchData()
  }, [url, options])
  return response
}
