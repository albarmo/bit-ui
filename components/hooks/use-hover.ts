import { useState, useRef } from "react"
import { useEventListener } from "./use-event-listener"

const useHover = <T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] => {
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<T | null>(null)

  useEventListener("mouseover", () => setIsHovering(true), ref.current)
  useEventListener("mouseout", () => setIsHovering(false), ref.current)

  return [ref, isHovering]
}

export { useHover }
