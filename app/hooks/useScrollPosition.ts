// useScrollPosition.js (or .ts if using TypeScript)
import { useState, useEffect } from "react"

export default function useScrollPosition() {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isScrolled
}
