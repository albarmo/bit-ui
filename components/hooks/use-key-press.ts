import { useState } from "react"
import { useEventListener } from "./use-event-listener"

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEventListener("keydown", downHandler)
  useEventListener("keyup", upHandler)

  return keyPressed
}

export { useKeyPress }
