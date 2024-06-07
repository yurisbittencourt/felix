import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex w-full h-12 md:h-20 justify-center items-center text-white bg-white mt-auto p-4">
      <Image
        src="/logo-symbol.png"
        alt="Logo symbol"
        width={885}
        height={1087}
        className="w-auto h-8 md:h-12"
      />
    </footer>
  )
}
