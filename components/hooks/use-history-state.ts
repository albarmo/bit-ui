import { useState, useCallback } from "react"

const useHistoryState = <T>(
  initialState: T
): [
  T,
  (newState: T) => void,
  () => void,
  () => void,
  boolean,
  boolean
] => {
  const [history, setHistory] = useState([initialState])
  const [index, setIndex] = useState(0)

  const setState = useCallback(
    (newState: T) => {
      const newHistory = history.slice(0, index + 1)
      newHistory.push(newState)
      setHistory(newHistory)
      setIndex(newHistory.length - 1)
    },
    [history, index]
  )

  const undo = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }, [index])

  const redo = useCallback(() => {
    if (index < history.length - 1) {
      setIndex(index + 1)
    }
  }, [index, history.length])

  const canUndo = index > 0
  const canRedo = index < history.length - 1

  return [history[index], setState, undo, redo, canUndo, canRedo]
}

export { useHistoryState }
