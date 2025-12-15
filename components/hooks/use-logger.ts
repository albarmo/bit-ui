import { useEffect } from "react"

const useLogger = (componentName: string, ...rest: any[]) => {
  useEffect(() => {
    console.log(`${componentName} mounted`, ...rest)
    return () => {
      console.log(`${componentName} unmounted`)
    }
  }, [componentName, rest])
}

export { useLogger }
