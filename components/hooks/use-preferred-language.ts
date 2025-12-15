import { useState, useEffect } from "react"

const usePreferredLanguage = () => {
  const [language, setLanguage] = useState(navigator.language)

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(navigator.language)
    }
    window.addEventListener("languagechange", handleLanguageChange)
    return () => {
      window.removeEventListener("languagechange", handleLanguageChange)
    }
  }, [])

  return language
}

export { usePreferredLanguage }
