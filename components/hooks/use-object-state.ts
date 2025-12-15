import { useState, useCallback } from "react"

const useObjectState = <T extends object>(
  initialState: T
): [T, (newState: Partial<T>) => void] => {
  const [state, setState] = useState(initialState)

  const setObjectState = useCallback((newState: Partial<T>) => {
    setState((prevState) => ({ ...prevState, ...newState }))
  }, [])

  return [state, setObjectState]
}

export { useObjectState }
