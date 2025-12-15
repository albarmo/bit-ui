import { useState } from "react"

const useMap = <TKey, TValue>(
  initialState = new Map<TKey, TValue>()
) => {
  const [map, setMap] = useState(initialState)

  return {
    map,
    set: (key: TKey, value: TValue) =>
      setMap((prevMap) => {
        const newMap = new Map(prevMap)
        newMap.set(key, value)
        return newMap
      }),
    clear: () => setMap(new Map()),
    delete: (key: TKey) =>
      setMap((prevMap) => {
        const newMap = new Map(prevMap)
        newMap.delete(key)
        return newMap
      }),
  }
}

export { useMap }
