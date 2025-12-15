import { useState, useMemo } from "react"

const useQueue = <T>(initialValue: T[] = []) => {
  const [queue, setQueue] = useState(initialValue)

  const add = (element: T) => {
    setQueue((q) => [...q, element])
  }

  const remove = () => {
    let result
    setQueue(([first, ...rest]) => {
      result = first
      return rest
    })
    return result
  }

  const first = useMemo(() => queue[0], [queue])
  const last = useMemo(() => queue[queue.length - 1], [queue])
  const size = queue.length

  return {
    add,
    remove,
    first,
    last,
    size,
    queue,
  }
}

export { useQueue }
