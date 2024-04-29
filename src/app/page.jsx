import MyButton from "@/src/components/MyButton";
import Image from "next/image";
import onder from "/src/ui/img-onder.jpg";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex w-[1216px] gap-6">
          <div className="w-[296px] h-[441px] flex flex-col justify-between">
            <Image
              className="rounded-full "
              src={onder}
              alt={"onder"}
            />
            <div>
              <h3 className={"text-2xl font-bold"}>Önder BUĞDACİ</h3>
              <p className="text-xl font-light text-gray-500">oonderrr</p>
            </div>

            <a
              className="w-full h-8 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 items-center flex justify-center text-sm duration-100"
              href={"https://github.com/oonderrr"}
            >
              Follow
            </a>
            <div className="flex h-4 items-center gap-1">
              <a
                className="flex text-sm gap-1 hover:text-blue-700 hover:fill-blue-700 [&>*]:hover:opacity-90"
                href="https://github.com/oonderrr?tab=followers"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z" />
                </svg>

                <p className="font-bold">0</p>
                <p className="opacity-70">followers</p>
              </a>
              <p>·</p>
              <a
                className="flex text-sm gap-1 hover:text-blue-700 [&>p]:hover:opacity-90"
                href="https://github.com/oonderrr?tab=following"
              >
                <p className="font-bold">1</p>
                <p className="opacity-60">following</p>
              </a>
            </div>
          </div>
          <div className="w-[896px] h-[441px] rounded-md border border-gray-300 p-6 flex flex-col justify-between">
            <p className="text-xs font-mono">oonderrr/README.md</p>
            <h2 className="font-medium text-2xl">
              Hi 👋, I'm Önder <hr />
            </h2>

            <div className="flex text-sm">
              <p>🌱 I’m currently learning</p> &nbsp;
              <p className="font-bold">React, Next.js.</p>
            </div>

            <h3 className="font-bold text-lg">Languages and Tools:</h3>
            <img
              src="https://skillicons.dev/icons?i=html,css,js,ts,tailwind,react,nextjs,vite,github"
              alt="nextjs"
              width="370"
              height="40"
            />

            <p>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs?username=oonderrr&show_icons=true&locale=en&layout=compact"
                alt="oonderrr"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col items-center px-5">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="h-full w-full rounded-lg border border-black flex gap-2 p-2">
          <MyButton
            name={"Dice Rolling Game"}
            href={"dice-rolling-game"}
          />
          <MyButton
            name={"Mouse Over Color Animation"}
            href={"mouse-over-color-animation"}
          />
        </div>
      </div>
    </>
  );
}
