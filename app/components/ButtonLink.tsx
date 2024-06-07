import Link from "next/link"
import { ReactNode } from "react"

type ButtonLinkProps = {
  route: string
  children: ReactNode
}

export default function ButtonLink({ route, children }: ButtonLinkProps) {
  return (
    <Link
      href={route}
      className="z-20 relative group p-2 mb-10 overflow-hidden"
    >
      <span className="text-white">{children}</span>
      <span className="absolute top-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute top-0 left-0 w-[1px] h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
      <span className="absolute bottom-0 right-0 w-[1px] h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
      <div className="absolute top-0 inset-[-150%] h-full w-1/2 z-30 block transform -skew-x-[80deg] bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:animate-shine "></div>
    </Link>
  )
}
