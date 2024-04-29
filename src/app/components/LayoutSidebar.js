import Image from "next/image";
import onder from "@/src/app/ui/img-onder.jpg";

function LayoutSidebar() {
  return (
    <>
      <div>
        <div
            className="w-full md:w-64 lg:w-[296px] h-max gap-5 md:gap-0 md:h-[441px] flex flex-col flex-none justify-between">
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

          <div className="flex gap-2 block md:hidden">
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" role="img"
                 aria-labelledby="aikimj7bs8vyjrmxhu5yk4bqd03eep4h"><title
                id="aikimj7bs8vyjrmxhu5yk4bqd03eep4h">LinkedIn</title>
              <g clip-path="url(#clip0_202_91845)">
                <path
                    d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                    fill="currentColor"/>
              </g>
            </svg>
            <a className="text-sm hover:text-blue-700 hover:underline" target="_blank" href="https://www.linkedin.com/in/onderbugdaci/" rel="noreferrer">
              in/onderbugdaci
            </a>
          </div>

          <a
              className="w-full h-8 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 items-center flex justify-center text-sm duration-100"
              href={"https://github.com/oonderrr"}
              target="_blank" rel="noreferrer"
          >
            Follow
          </a>
          <div className="flex h-4 items-center gap-1">
            <a
                target="_blank"
                className="flex text-sm gap-1 hover:text-blue-700 hover:fill-blue-700 [&>*]:hover:opacity-90"
                href="https://github.com/oonderrr?tab=followers" rel="noreferrer"
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
                target="_blank"
                className="flex text-sm gap-1 hover:text-blue-700 [&>p]:hover:opacity-90"
                href="https://github.com/oonderrr?tab=following" rel="noreferrer"
            >
              <p className="font-bold">1</p>
              <p className="opacity-60">following</p>
            </a>
          </div>
        </div>

        <div className="mt-6 text-gray-600 fill-gray-600 hidden md:block">
          <div className="flex gap-2">
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1"
                 aria-hidden="true">
              <path
                  d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"/>
            </svg>
            <p className="text-sm">
              Turkey
            </p>
          </div>
          <div className="flex gap-2">
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1"
                 aria-hidden="true">
              <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"/>
            </svg>
            <p className="text-sm">
              17:39
            </p>
          </div>
          <div className="flex gap-2">
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" role="img"
                 aria-labelledby="aikimj7bs8vyjrmxhu5yk4bqd03eep4h" ><title
                id="aikimj7bs8vyjrmxhu5yk4bqd03eep4h">LinkedIn</title>
              <g clip-path="url(#clip0_202_91845)">
                <path
                    d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                    fill="currentColor"/>
              </g>
            </svg>
            <a className="text-sm hover:text-blue-700 hover:underline" target="_blank" href="https://www.linkedin.com/in/onderbugdaci/" rel="noreferrer">
              in/onderbugdaci
            </a>
          </div>
        </div>
        <hr className="md:hidden mt-6"/>
      </div>


    </>
  );
}

export default LayoutSidebar;
