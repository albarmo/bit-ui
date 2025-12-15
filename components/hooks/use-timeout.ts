import { useEffect, useRef } from "react"

const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<(() => void) | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) return

    const tick = () => {
      savedCallback.current?.()
    }

    const id = setTimeout(tick, delay)

    return () => clearTimeout(id)
  }, [delay])
}

export { useTimeout }
