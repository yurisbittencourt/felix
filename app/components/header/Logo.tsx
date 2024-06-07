type LogoProps = {
  open: boolean
}

export default function Logo({ open }: LogoProps) {
  return (
    <div className="w-[212px] h-[66px] flex p-2 z-100 cursor-pointer">
      {/* F */}
      <div className="relative w-[40px] h-[50px]">
        <span className="absolute top-0 left-0 w-1 h-full bg-white" />
        <span className="absolute top-0 left-0 w-full h-1 bg-white" />
        <span className="absolute top-0 left-0 w-9/12 h-1 bg-white translate-y-[23px]" />
      </div>
      {/* E */}
      <div
        className={`relative w-[40px] h-[50px] translate-x-[-40px] transition-all duration-300 ${
          open && "translate-x-[8px]"
        }`}
      >
        <span className="absolute top-0 left-0 w-1 h-full bg-white " />
        <span className="absolute top-0 left-0 w-full h-1 bg-white" />
        <span className="absolute top-0 left-0 w-9/12 h-1 bg-white translate-y-[23px]" />
        <span className="absolute top-0 left-0 w-full h-1 bg-white translate-y-[46px]" />
      </div>
      {/* L */}
      <div
        className={`relative w-[40px] h-[50px] translate-x-[-80px] transition-all duration-300 ${
          open && "translate-x-[16px]"
        }`}
      >
        <span className="absolute top-0 left-0 w-1 h-full bg-white" />
        <span className="absolute top-0 left-0 w-full h-1 bg-white translate-y-[46px]" />
      </div>
      {/* I */}
      <div
        className={`relative w-[4px] h-[50px] translate-x-[-84px] transition-all duration-300 ${
          open && "translate-x-[24px]"
        }`}
      >
        <span className="absolute top-0 left-0 w-1 h-full bg-white" />
      </div>
      {/* X */}
      <div
        className={`relative w-[40px] h-[50px] translate-x-[-124px] overflow-hidden transition-all duration-300 ${
          open && "translate-x-[32px]"
        }`}
      >
        <span className="absolute top-0 left-[23px] w-[6px] h-full skew-x-[38.66deg] translate-x-[-6px] bg-white" />
        <span className="absolute top-0 left-[23px] w-[6px] h-full skew-x-[-38.66deg] translate-x-[-6px] bg-white" />
      </div>
    </div>
  )
}
