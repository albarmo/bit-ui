import { useState, useEffect } from "react"

const useMouse = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY, currentTarget } = event
      if (currentTarget) {
        const { left, top } = (currentTarget as HTMLElement).getBoundingClientRect()
        setState({
          x: clientX,
          y: clientY,
          elementX: clientX - left,
          elementY: clientY - top,
          elementPositionX: left,
          elementPositionY: top,
        })
      }
    }
    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return state
}

export { useMouse }
