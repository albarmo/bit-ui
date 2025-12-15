import { useState, useLayoutEffect, RefObject } from "react"

interface Measure {
  width: number
  height: number
  top: number
  left: number
  right: number
  bottom: number
}

const useMeasure = (ref: RefObject<HTMLElement>): Measure => {
  const [measure, setMeasure] = useState<Measure>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMeasure({
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
        })
      }
    }

    handleResize()

    const resizeObserver = new ResizeObserver(handleResize)
    if (ref.current) {
      resizeObserver.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current)
      }
    }
  }, [ref])

  return measure
}

export { useMeasure }
