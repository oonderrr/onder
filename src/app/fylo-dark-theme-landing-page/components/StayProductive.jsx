import stay from "/src/app/fylo-dark-theme-landing-page/ui/images/illustration-stay-productive.png";
import Image from "next/image";
import {raleway} from "@/src/fonts/fonts";
import arrow from "/src/app/fylo-dark-theme-landing-page/ui/images/icon-arrow.svg";

function StayProductive() {
  return (
    <>
      <div
        className={
          "px-7 md:px-16 mt-24 flex flex-col md:flex-row gap-5 items-center"
        }
      >
        <Image
          className="basis-1/2"
          src={stay}
          alt={"stay"}
          quality={100}
        />
        <div className="flex flex-col gap-4 w-11/12 mt-10 basis-1/2">
          <h4 className={`text-2xl font-bold  ${raleway.className}`}>
            Stay productive, wherever you are
          </h4>

          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <button
            type={"button"}
            className="w-max flex items-center gap-1 text-fylo-cyan-inside-call-to-action-gradient border-b border-fylo-cyan-inside-call-to-action-gradient"
          >
            See how Fylo works{" "}
            <Image
              src={arrow}
              alt={"arrow"}
              quality={100}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default StayProductive;
