import {ProjectsDB} from "@/src/app/components/ProjectsDB";

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
                    Live
                    <svg
                      className="size-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                    </svg>
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
