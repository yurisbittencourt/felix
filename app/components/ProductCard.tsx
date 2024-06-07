import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, image, price } = product
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col items-center p-4 group hover:cursor-pointer bg-gradient-to-br from-white to-gray-100">
        <Image
          src={image}
          alt="product"
          width="300"
          height="300"
          className="mb-4"
        />
        <h4 className="w-full text-sm font-light mb-1">{name}</h4>
        <p className="w-full text-sm font-light">R${price},00</p>
      </div>
    </Link>
  )
}
