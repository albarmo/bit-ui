import { useRef, useEffect } from "react"

const useIsFirstRender = (): boolean => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  return isFirstRender.current
}

export { useIsFirstRender }
