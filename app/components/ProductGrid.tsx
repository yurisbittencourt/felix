import { ReactNode } from "react"

type ProductGridProps = {
  children: ReactNode
}

export default function ProductGrid({ children }: ProductGridProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  )
}
