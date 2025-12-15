import { useState, useEffect } from "react"

const useSessionStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.log(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export { useSessionStorage }
