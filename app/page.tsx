import FullPageSection from "./components/FullPageSection"
import ButtonLink from "./components/ButtonLink"

export default function Home() {
  return (
    <main className="">
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
      <FullPageSection imagePath="/assets/hero-1.jpg">
        {/* <h2 className="z-20 text-white text-2xl mb-5">Collection 1</h2> */}
        <ButtonLink route="/products">Descubra a Coleção</ButtonLink>
      </FullPageSection>
      <FullPageSection imagePath="/assets/hero-2.jpg">
        {/* <h2 className="z-20 text-white text-2xl mb-5">Collection 2</h2> */}
        <ButtonLink route="/products">Descubra Under Measure</ButtonLink>
      </FullPageSection>
    </main>
  )
}
