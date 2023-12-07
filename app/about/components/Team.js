import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Teams
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Meet the driving force behind JOE DevTech our exceptional team of
            developers, designers, and strategists. Their collective expertise
            extends beyond conventional boundaries, enabling us to tackle
            complex challenges with creativity and precision.
          </p>
        </div>
        <ul
          role="list"
          class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div class="flex items-center gap-x-6">
              <Image
                class="h-16 w-16 rounded-full"
                src="/saya.jpg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Ihsan Raharjo
                </h3>
                <p class="text-sm font-semibold leading-6 text-[#0A6076]">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <Image
                class="h-16 w-16 rounded-full"
                src="/ava2.jpg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Christina Simpson
                </h3>
                <p class="text-sm font-semibold leading-6 text-[#0A6076]">
                  CTO (Chief Technology Officer)
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <Image
                class="h-16 w-16 rounded-full"
                src="/ava5.jpg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Ivan Benson
                </h3>
                <p class="text-sm font-semibold leading-6 text-[#0A6076]">
                  Senior FullStack Web Development
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <Image
                class="h-16 w-16 rounded-full"
                src="/ava4.jpg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Finnian Poole
                </h3>
                <p class="text-sm font-semibold leading-6 text-[#0A6076]">
                  FullStack Web Development
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <Image
                class="h-16 w-16 rounded-full"
                src="/ava1.jpg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Ameera Bates
                </h3>
                <p class="text-sm font-semibold leading-6 text-[#0A6076]">
                  Mobile Development
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <Image
                class="h-16 w-16 rounded-full"
                src="/ava6.jpg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Garfield Lee
                </h3>
                <p class="text-sm font-semibold leading-6 text-[#0A6076]">
                  Senior Mobile Development
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
