import { useEffect, useRef } from "react"

const useEventListener = (
  eventName: string,
  handler: (event: any) => void,
  element: EventTarget | null = window
) => {
  const savedHandler = useRef<((event: any) => void) | null>(null)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!element || !element.addEventListener) return

    const eventListener = (event: Event) => {
      savedHandler.current?.(event)
    }

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

export { useEventListener }
