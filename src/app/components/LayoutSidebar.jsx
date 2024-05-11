"use client";
import Image from "next/image";
import onder from "@/src/app/ui/img-onder.jpg";
import {useEffect, useState} from "react";
import {GoClock, GoLocation, GoPeople} from "react-icons/go";
import {FaLinkedin} from "react-icons/fa6";

function LayoutSidebar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <>
      <div>
        <div className="w-full md:w-64 lg:w-[296px] h-max gap-5 md:gap-0 md:h-[441px] flex flex-col flex-none justify-between">
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
            <FaLinkedin
              className={"text-gray-500"}
              strokeWidth={"0.4"}
            />
            <a
              className="text-sm hover:text-blue-700 hover:underline"
              target="_blank"
              href="https://www.linkedin.com/in/onderbugdaci/"
              rel="noreferrer"
            >
              in/onderbugdaci
            </a>
          </div>

          <a
            className="w-full h-8 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 items-center flex justify-center text-sm duration-100"
            href={"https://github.com/oonderrr"}
            target="_blank"
            rel="noreferrer"
          >
            Follow
          </a>
          <div className="flex h-4 items-center gap-1">
            <a
              className="flex text-sm gap-1 *:hover:text-blue-700 *:hover:opacity-90"
              href="https://github.com/oonderrr?tab=followers"
              target="_blank"
              rel="noreferrer"
            >
              <GoPeople
                className={"text-gray-500"}
                strokeWidth={1}
              />
              <p className="font-bold">0</p>
              <p className="opacity-60">followers</p>
            </a>
            <p>·</p>
            <a
              target="_blank"
              className="flex text-sm gap-1 hover:text-blue-700 [&>p]:hover:opacity-90"
              href="https://github.com/oonderrr?tab=following"
              rel="noreferrer"
            >
              <p className="font-bold">1</p>
              <p className="opacity-60">following</p>
            </a>
          </div>
        </div>

        <div className="mt-7 text-gray-800 fill-gray-600 hidden md:flex flex-col gap-1">
          <div className="flex gap-2">
            <GoLocation
              className={"text-gray-500"}
              strokeWidth={1}
            />
            <p className="text-sm">Turkey</p>
          </div>
          <div className="flex gap-2">
            <GoClock
              className={"text-gray-500"}
              strokeWidth={1}
            />
            <p className="text-sm flex gap-1">
              {hours}:{minutes} <p className="opacity-60">(UTC +03.00)</p>
            </p>
          </div>
          <div className="flex gap-2">
            <FaLinkedin
              className={"text-gray-500"}
              strokeWidth={1}
            />
            <a
              className="text-sm hover:text-blue-700 hover:underline"
              target="_blank"
              href="https://www.linkedin.com/in/onderbugdaci/"
              rel="noreferrer"
            >
              in/onderbugdaci
            </a>
          </div>
        </div>
        <hr className="md:hidden mt-6" />
      </div>
    </>
  );
}

export default LayoutSidebar;
