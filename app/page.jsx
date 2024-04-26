import MyButton from "@/app/components/MyButton";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center px-5">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="h-full w-full rounded-lg border border-black flex gap-2 p-2">
          <MyButton
            name={"Dice"}
            href={"/"}
          />
        </div>
      </div>
    </>
  );
}
