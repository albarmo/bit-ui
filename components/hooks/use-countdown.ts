import { useState, useEffect } from "react"

const useCountdown = (
  initialValue: number
): [number, () => void, () => void, () => void] => {
  const [count, setCount] = useState(initialValue)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1
        }
        setIsRunning(false)
        return 0
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setCount(initialValue)
    setIsRunning(false)
  }

  return [count, start, pause, reset]
}

export { useCountdown }
