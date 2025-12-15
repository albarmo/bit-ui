import { useEffect, useRef } from "react"

const useIntervalWhen = (
  callback: () => void,
  delay: number | null,
  when: boolean
) => {
  const savedCallback = useRef<(() => void) | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!when) {
      return
    }

    function tick() {
      savedCallback.current && savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay, when])
}

export { useIntervalWhen }
