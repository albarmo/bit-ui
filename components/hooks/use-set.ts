import { useState } from "react"

const useSet = <T>(initialState = new Set<T>()) => {
  const [set, setSet] = useState(initialState)

  return {
    set,
    add: (item: T) => setSet((prevSet) => new Set([...Array.from(prevSet), item])),
    clear: () => setSet(new Set()),
    delete: (item: T) =>
      setSet((prevSet) => {
        const newSet = new Set(prevSet)
        newSet.delete(item)
        return newSet
      }),
  }
}

export { useSet }
