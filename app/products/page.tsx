import ProductCard from "../components/ProductCard"
import ProductGrid from "../components/ProductGrid"
import productData from "./product-data.json"

export default function Page() {
  return (
    <main className="mt-from-nav">
      <section className="flex flex-col w-full items-center">
        <h1 className=" w-full text-center text-xl p-6">The Tee Collection</h1>
        <ProductGrid>
          {productData.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ProductGrid>
      </section>
    </main>
  )
}
