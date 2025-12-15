import { useEffect, useRef } from "react"

type EventType = "mousedown" | "mouseup" | "touchstart" | "touchend"

const useClickAway = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  events: EventType[] = ["mousedown", "touchstart"]
) => {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        savedHandler.current(event)
      }
    }

    events.forEach((event) => {
      document.addEventListener(event, listener)
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener)
      })
    }
  }, [ref, events])
}

export { useClickAway }
