import { useEventListener } from "./use-event-listener"

const usePageLeave = (onPageLeave: () => void) => {
  useEventListener("mouseout", (event) => {
    const from = event.relatedTarget || (event as any).toElement
    if (!from || (from as any).nodeName === "HTML") {
      onPageLeave()
    }
  })
}

export { usePageLeave }
