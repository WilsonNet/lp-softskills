import React from 'react'

interface Card {
  title: string
  content: string
  emoji: string
}

function Card({ title, content, emoji }: Card) {
  return (
    <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col self-stretch ">
      <div className="gray-light flex self-stretch items-stretch bg-gray-400 bg-opacity-20 h-full">

        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
            {emoji}
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
