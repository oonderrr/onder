import Image from "next/image";

function Card({ name, title, content, src }) {
  return (
    <>
      <div className="w-96 h-48 bg-fylo-dark-blue-email-background p-7 flex flex-col justify-between rounded-md z-10">
        <p className="text-sm">{content}</p>
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full w-7 h-7"
            src={src}
            alt={"src"}
            quality={100}
          />
          <div>
            <h5 className="text-sm">{name}</h5>
            <p className="text-xs opacity-80">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
