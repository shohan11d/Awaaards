import { TiLocationArrow } from "react-icons/ti"
import VideoPreview from "./VideoPreview"
import { TfiLocationArrow } from "react-icons/tfi"
import Button from "./Button"

function Hero() {
  return (
    <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-400">
      <div>
        <div>
          <div>
            <div>
              <video className="size-64 origin-center scale-150 object-cover object-center" src="/videos/hero-1.mp4" autoPlay loop muted id="current-video" />
            </div>
          </div>
        </div>
        <video src="/videos/hero-3.mp4" id="next-video" autoPlay loop muted className="absolute-center absolute z-20 size-64 object-cover object-center" />
        <video
          autoPlay
          src="/videos/hero-4.mp4"
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        G<b>A</b>MING
      </h1>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">
            redefi<b>n</b>e
          </h1>

          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>

          <Button
            id="watch-trailer"
            title="Watch trailer"
            leftIcon={<TfiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
          />
        </div>
      </div>

    </div>

  )
}

export default Hero
