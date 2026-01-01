import AnimatedTitle from "./AnimatedTitle";

function About() {
  return (
    <div id="about" className="min-h-screen w-screen bg-pink-400">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="">Welcome to Zentry</p>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 text-black! text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
