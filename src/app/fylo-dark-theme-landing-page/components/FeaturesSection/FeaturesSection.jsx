import {Items} from "./Items.jsx";
import Image from "next/image";
import {raleway} from "@/src/fonts/fonts";

function FeaturesSection() {
  return (
    <>
      <div
        className={`grid gap-10 md:grid-cols-2 lg:px-36 place-items-center mt-7 ${raleway.className}`}
      >
        {Items.map((item) => {
          return (
            <div
              key={item}
              className="flex flex-col gap-5 items-center text-center w-2/3"
            >
              <Image
                src={item.icon}
                alt="icon"
                width={100}
                height={100}
              />
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-center opacity-90">{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FeaturesSection;
