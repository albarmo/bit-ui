import { useState, useEffect } from "react"

const useScript = (src: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    let script: HTMLScriptElement | null = document.querySelector(
      `script[src="${src}"]`
    )

    if (!script) {
      script = document.createElement("script")
      script.src = src
      script.async = true

      const handleLoad = () => {
        setLoading(false)
      }
      const handleError = (error: any) => {
        setError(error)
      }

      script.addEventListener("load", handleLoad)
      script.addEventListener("error", handleError)

      document.body.appendChild(script)

      return () => {
        script?.removeEventListener("load", handleLoad)
        script?.removeEventListener("error", handleError)
        document.body.removeChild(script!)
      }
    } else {
      setLoading(false)
    }
  }, [src])

  return [loading, error]
}

export { useScript }
