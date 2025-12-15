import { useEffect, useState } from "react"

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

const useFetch = <T>(url: string, options?: RequestInit) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setState({ data, loading: false, error: null })
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error })
      }
    }

    fetchData()
  }, [url, options])

  return state
}

export { useFetch }
