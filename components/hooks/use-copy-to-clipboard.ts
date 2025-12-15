import { useState } from "react"

const useCopyToClipboard = (): [
  (text: string) => Promise<boolean>,
  { value: string | null; success: boolean }
] => {
  const [value, setValue] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setValue(text)
      setSuccess(true)
      return true
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error)
      setValue(null)
      setSuccess(false)
      return false
    }
  }

  return [copy, { value, success }]
}

export { useCopyToClipboard }
