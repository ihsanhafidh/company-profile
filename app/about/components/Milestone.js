import React from "react";

const Milestone = () => {
  return (
    <div className="m-20">
      <ol class="relative border-s border-gray-200 dark:border-zinc-800">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-black">
            December, 3 2023
          </time>
          <p class="mb-4 text-base font-normal text-black">Concepting</p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-black">
            December 4, 2023
          </time>
          <p class="text-base font-normal text-black">
            All of the pages and components are first designed in my brain yow
            and we keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-black">
            December 5, 2023
          </time>
          <p class="text-base font-normal text-black">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Milestone;
