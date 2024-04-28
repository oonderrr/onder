import Card from "@/src/app/fylo-dark-theme-landing-page/components/Quotes/Card";
import Image from "next/image";
import quout from "/src/app/fylo-dark-theme-landing-page/ui/images/bg-quotes.png";
import { Persons } from "@/src/app/fylo-dark-theme-landing-page/components/Quotes/persons";

function Quotes() {
  return (
    <>
      <div className="mt-24">
        <Image
          className="z-0"
          src={quout}
          alt={"quout"}
          quality={100}
        />
        <div className="px-7 lg:px-16 flex flex-col md:flex-row gap-8">
          {Persons.map((index) => {
            return (
              <Card
                key={index.name}
                name={index.name}
                title={index.title}
                content={index.content}
                src={index.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Quotes;
