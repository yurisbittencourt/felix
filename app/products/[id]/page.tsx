"use client"
import Carousel from "@/app/components/Carousel"
import productData from "../product-data.json"
import Image from "next/image"

type PageProps = {
  params: any
}

export default function Page({ params }: PageProps) {
  const product = productData.find((p) => p.id == params.id)
  return (
    // <div className="w-full h-full mt-from-nav">
    <div className="flex w-full flex-col sm:flex-row">
      <div className="flex flex-col w-full h-full-page-minus-nav">
        <Carousel slides={product!.image} autoPlayInterval={null} />
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-full max-w-xs p-4">
          <h3 className="pb-4 font-semibold">{product!.name}</h3>
          <p className="pb-4">{product!.desc}</p>
          <p className="pb-4">R$ {product!.price},00</p>
          <button className="text-white bg-black self-center py-2 px-8 rounded-full hover:bg-white hover:text-black border-[1px] border-black transition-all duration-300">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
    // </div>
  )
}
