import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, image, price } = product
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col items-center group pb-4 hover:cursor-pointer">
        <Image
          src={image[0]}
          alt="product"
          width="300"
          height="300"
          className="w-full h-auto mb-2"
        />
        <h4 className="w-full text-md text-center font-light mb-1">{name}</h4>
        {/* <p className="w-full text-sm font-light">R${price},00</p> */}
      </div>
    </Link>
  )
}
