type NavProps = {
  open: boolean
}

export default function Nav({ open }: NavProps) {
  return (
    <nav
      className={`relative flex w-[212px] max-h-0 bg-black rounded-b-sm overflow-hidden transition-all ${
        open
          ? `max-h-[300px] delay-300 duration-300`
          : `max-h-0  duration-0 delay-0`
      }`}
    >
      <ul className="text-white flex flex-col w-full">
        <li className="w-full text-sm font-light cursor-pointer flex relative group">
          <a href="/" className="w-full px-6 py-4">
            Home
            <span className="absolute bottom-3 left-3 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-[100px]"></span>
          </a>
        </li>
        <li className="w-full text-sm font-light cursor-pointer flex relative group">
          <a href="/products" className="w-full px-6 py-4">
            Explorar
            <span className="absolute bottom-3 left-3 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-[100px]"></span>
          </a>
        </li>
        <li className="w-full text-sm font-light cursor-pointer flex relative group">
          <a href="/products/1" className="w-full px-6 py-4">
            Novo
            <span className="absolute bottom-3 left-3 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-[100px]"></span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
