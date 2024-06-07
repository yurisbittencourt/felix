import productData from "../product-data.json"
import Image from "next/image"

type PageProps = {
  params: any
}

export default function Page({ params }: PageProps) {
  const product = productData.find((p) => p.id == params.id)
  return (
    <div className="w-full h-full">
      <h1 className=" w-full text-center text-xl p-6 bg-gray-100">
        {product!.name}
      </h1>
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <Image src={product!.image} alt="product" width={800} height={800} />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-full max-w-xs">
            <h3 className="pb-4 font-semibold">{product!.name}</h3>
            <p className="pb-4">R$ {product!.desc},00</p>
            <p className="pb-4">R$ {product!.price},00</p>
            <button className="text-white bg-black py-2 px-8 rounded-full hover:bg-white hover:text-black border-[1px] border-black transition-all duration-300">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
