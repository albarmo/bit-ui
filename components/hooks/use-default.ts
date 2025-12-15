import { useState, useMemo } from "react"

const useDefault = <T>(initialValue: T, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue)

  const smartValue = useMemo(() => {
    return value === null || value === undefined ? defaultValue : value
  }, [value, defaultValue])

  return [smartValue, setValue]
}

export { useDefault }
