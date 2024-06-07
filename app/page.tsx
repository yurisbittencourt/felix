import FullPageSection from "./components/FullPageSection"
import ButtonLink from "./components/ButtonLink"

export default function Home() {
  return (
    <main className="mt-from-nav">
      <div className="relative flex flex-col justify-end items-center w-full h-full-page-minus-nav bg-black md:hidden">
        <video
          className="w-auto h-full object-cover"
          src="/felix-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <FullPageSection imagePath="/assets/DSC07326.jpg">
        <h2 className="z-20 text-white text-2xl mb-5">Collection 1</h2>
        <ButtonLink route="/products">Discover the Collection</ButtonLink>
      </FullPageSection>
      <FullPageSection imagePath="/assets/DSC07076.jpg">
        <h2 className="z-20 text-white text-2xl mb-5">Collection 2</h2>
        <ButtonLink route="/products">Discover the Collection</ButtonLink>
      </FullPageSection>
      <FullPageSection imagePath="/assets/DSC07569.jpg">
        <h2 className="z-20 text-white text-2xl mb-5">Collection 3</h2>
        <ButtonLink route="/products">Discover the Collection</ButtonLink>
      </FullPageSection>
    </main>
  )
}
