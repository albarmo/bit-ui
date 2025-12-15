import { useState, useEffect } from "react"

const useIdle = (ms: number = 1000 * 60) => {
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleTimeout = () => {
      setIsIdle(true)
    }

    const handleInteraction = () => {
      setIsIdle(false)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleTimeout, ms)
    }

    timeoutId = setTimeout(handleTimeout, ms)

    window.addEventListener("mousemove", handleInteraction)
    window.addEventListener("keydown", handleInteraction)
    window.addEventListener("touchstart", handleInteraction)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
    }
  }, [ms])

  return isIdle
}

export { useIdle }
