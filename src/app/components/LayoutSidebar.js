import Image from "next/image";
import onder from "@/src/app/ui/img-onder.jpg";

function LayoutSidebar() {
  return (
    <>
      <div
          className="w-full md:w-64 lg:w-[296px] h-max gap-6 md:gap-0 md:h-[441px] flex flex-col flex-none justify-between">
        <div className="flex md:flex-col items-center md:items-start gap-4">
          <Image
              className="rounded-full h-28 w-28 md:w-auto md:h-auto"
              src={onder}
              alt={"onder"}
          />
          <div>
            <h3 className={"text-2xl font-bold"}>Önder BUĞDACİ</h3>
            <p className="text-xl font-light text-gray-500">oonderrr</p>
          </div>
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
                className="size-4 opacity-60"
                aria-hidden="true"
                viewBox="0 0 16 16"
            >
              <path
                  d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"/>
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
        <div>
          <div className="flex gap-1">
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1"
                 aria-hidden="true">
              <path
                  d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"/>
            </svg>
            <p className="text-sm">
              Turkey
            </p>
          </div>
        </div>
      </div>
      <hr className="md:invisible"/>

    </>
  );
}

export default LayoutSidebar;
