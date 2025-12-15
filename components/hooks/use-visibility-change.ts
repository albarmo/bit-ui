import { useState, useEffect } from "react"

const useVisibilityChange = () => {
  const [documentVisible, setDocumentVisible] = useState(!document.hidden)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setDocumentVisible(!document.hidden)
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return documentVisible
}

export { useVisibilityChange }
