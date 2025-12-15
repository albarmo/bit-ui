import { useState, useEffect, RefObject } from "react"

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverOptions
): IntersectionObserverEntry | null => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return entry
}

export { useIntersectionObserver }
