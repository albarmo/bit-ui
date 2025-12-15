import { useRef, useEffect } from "react"

const useRenderCount = (): number => {
  const count = useRef(1)

  useEffect(() => {
    count.current += 1
  })

  return count.current
}

export { useRenderCount }
