import { useState } from "react"

const useCounter = (
  initialValue: number = 0
): [number, () => void, () => void, (value: number) => void, () => void] => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount((prevCount) => prevCount + 1)
  const decrement = () => setCount((prevCount) => prevCount - 1)
  const set = (value: number) => setCount(value)
  const reset = () => setCount(initialValue)

  return [count, increment, decrement, set, reset]
}

export { useCounter }
