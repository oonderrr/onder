import Projects from "@/src/app/components/Projects";

function LayoutMain() {
  return (
    <>
      <div className="w-full h-max">
        <div className="w-full xl:w-[896px] h-[441px] rounded-md border border-gray-300 p-6 flex flex-col flex-initial justify-between">
          <p className="text-xs font-mono">oonderrr/README.md</p>
          <h2 className="font-medium text-2xl">
            Hi 👋, I'm Önder <hr className="mt-1" />
          </h2>

          <div className="flex text-xs sm:text-sm">
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
        <Projects />
      </div>
    </>
  );
}

export default LayoutMain;
