import { useEffect, useState, useRef } from "react"

interface UseContinuousRetryOptions {
  retryFn: () => Promise<boolean>
  interval?: number
  maxRetries?: number
}

const useContinuousRetry = ({
  retryFn,
  interval = 1000,
  maxRetries = Infinity,
}: UseContinuousRetryOptions) => {
  const [retryCount, setRetryCount] = useState(0)
  const [isRetrying, setIsRetrying] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const start = () => {
    if (isRetrying) return
    setIsRetrying(true)
    setRetryCount(0)

    const attempt = async () => {
      const success = await retryFn()
      if (success) {
        stop()
      } else if (retryCount + 1 >= maxRetries) {
        stop()
      }
      setRetryCount((prev) => prev + 1)
    }

    attempt()
    intervalRef.current = setInterval(attempt, interval)
  }

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsRetrying(false)
  }

  useEffect(() => {
    return () => stop() // Cleanup on unmount
  }, [])

  return { isRetrying, retryCount, start, stop }
}

export { useContinuousRetry }
