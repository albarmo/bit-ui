import { useCallback, useRef } from "react"
import { useEventListener } from "./use-event-listener"

type LongPressOptions = {
  delay?: number
}

const useLongPress = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  options: LongPressOptions = { delay: 300 }
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const start = useCallback(() => {
    clear()
    timeoutRef.current = setTimeout(callback, options.delay ?? 300)
  }, [callback, options.delay])

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  useEventListener("mousedown", start, ref.current)
  useEventListener("touchstart", start, ref.current)
  useEventListener("mouseup", clear, ref.current)
  useEventListener("mouseleave", clear, ref.current)
  useEventListener("touchend", clear, ref.current)
}

export { useLongPress }
