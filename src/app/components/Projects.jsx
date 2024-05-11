import {ProjectsDB} from "@/src/app/components/ProjectsDB";
import {HiOutlineExternalLink} from "react-icons/hi";

function Projects() {
  return (
    <>
      <div className="w-full xl:w-[896px] mt-6 mb-8">
        <h2 className="text-lg font-light opacity-70">Projects</h2>
        <div className="w-full xl:w-[896px] grid lg:grid-cols-2 gap-4">
          {ProjectsDB.map((project) => {
            return (
              <div
                key={project.id}
                className="w-full h-24 rounded-md border border-gray-300 px-4 py-3 flex flex-col justify-between"
              >
                <a
                  className="text-blue-600 hover:underline text-sm font-bold text-start"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
                <div className="flex justify-between">
                  <div className="flex gap-1.5 items-center [&>div]:size-2.5 [&>div]:rounded-full [&>p]:text-xs [&>p]:text-gray-500">
                    <div className={project.color1} />
                    <p>{project.language1}</p>
                    <div className={project.color2} />
                    <p>{project.language2}</p>
                  </div>

                  <a
                    className="hover:underline text-xs font-bold text-start flex gap-0.5"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live<HiOutlineExternalLink strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
