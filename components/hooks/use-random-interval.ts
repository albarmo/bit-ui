import { useEffect, useRef, useCallback } from "react"

const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  const tick = useCallback(() => {
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
    timeoutId.current = setTimeout(() => {
      savedCallback.current()
      tick()
    }, delay)
  }, [minDelay, maxDelay])

  useEffect(() => {
    tick()
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [tick])
}

export { useRandomInterval }
