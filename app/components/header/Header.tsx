"use client"
import { useState } from "react"
import Logo from "./Logo"
import Link from "next/link"
import Nav from "./Nav"

export default function Header() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen((open) => !open)
    console.log(open)
  }
  return (
    <header
      onClick={() => handleClick()}
      className={`bg-black sticky top-1 left-1 w-full h-[66px] mb-[-66px] z-20 rounded-sm transition-all duration-300 ${
        open == true ? "max-w-[212px] rounded-b-none" : "max-w-[56px]"
      }`}
    >
      <Logo open={open} />
      <Nav open={open} />
    </header>
  )
}
