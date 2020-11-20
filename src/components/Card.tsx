import React from "react"

interface Card {
  title: string
  content: string
}

function Card({ title, content }: Card) {
  return (
    <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
      <div className="pattern-dots-md gray-light">
        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className=" text-xl title-font font-medium mb-3">{title}</h2>
            <p className="leading-relaxed text-sm text-justify">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
