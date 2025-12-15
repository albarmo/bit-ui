import { useState } from "react"

const useList = <T>(
  initialList: T[] = []
): {
  list: T[]
  set: (newList: T[]) => void
  push: (item: T) => void
  removeAt: (index: number) => void
  insertAt: (index: number, item: T) => void
  updateAt: (index: number, item: T) => void
  clear: () => void
} => {
  const [list, setList] = useState(initialList)

  return {
    list,
    set: setList,
    push: (item) => setList((l) => [...l, item]),
    removeAt: (index) =>
      setList((l) => [...l.slice(0, index), ...l.slice(index + 1)]),
    insertAt: (index, item) =>
      setList((l) => [...l.slice(0, index), item, ...l.slice(index)]),
    updateAt: (index, item) =>
      setList((l) => [...l.slice(0, index), item, ...l.slice(index + 1)]),
    clear: () => setList([]),
  }
}

export { useList }
