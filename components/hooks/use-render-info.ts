import { useRef, useEffect } from "react"

interface RenderInfo {
  renders: number
  timestamp: number
  sinceLast: number
}

const useRenderInfo = (): RenderInfo => {
  const renders = useRef(0)
  const timestamp = useRef(Date.now())
  const sinceLast = useRef(0)

  useEffect(() => {
    renders.current += 1
    const now = Date.now()
    sinceLast.current = now - timestamp.current
    timestamp.current = now
  })

  return {
    renders: renders.current,
    timestamp: timestamp.current,
    sinceLast: sinceLast.current,
  }
}

export { useRenderInfo }
