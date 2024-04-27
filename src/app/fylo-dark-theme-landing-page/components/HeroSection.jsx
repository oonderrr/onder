import Image from "next/image";
import imagePic from "/src/app/fylo-dark-theme-landing-page/ui/images/illustration-intro.png"
import {raleway} from "@/src/fonts/fonts";

function HeroSection() {
  return (
    <>
      <div
        className={`flex flex-col items-center gap-7 px-7 md:px-36 ${raleway.className}`}
      >
        <Image
          src={imagePic}
          alt={"image"}
          quality={100}
        />
        <h3 className="text-4xl font-bold text-center lg:w-7/12">
          All your files in one secure location, accessible anywhere.
        </h3>
        <p className="text-center w-8/12 lg:w-6/12">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <button
          type={"button"}
          className="bg-gradient-to-r from-fylo-cyan-inside-call-to-action-gradient to-fylo-blue-inside-call-to-action-gradient rounded-full text-fylo-white font-bold w-64 h-16"
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default HeroSection;
