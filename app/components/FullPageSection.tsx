import { ReactNode } from "react"

type FullPageSectionProps = {
  children: ReactNode
  imagePath: string
}

export default function FullPageSection({
  children,
  imagePath,
}: FullPageSectionProps) {
  return (
    <section className="relative flex flex-col justify-end items-center w-full h-full-page-minus-nav">
      <img
        src={imagePath}
        alt="fashion image"
        className="absolute w-full h-full object-cover z-0 "
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-black/90 from-0% to-transparent to-50% z-10"></div>

      {children}
    </section>
  )
}
