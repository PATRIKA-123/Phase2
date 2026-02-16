import React, { useState } from 'react'

const Card = ({ elem }) => {

  const { url, download_url, author } = elem
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="h-40 w-44 overflow-hidden rounded-xl shadow-lg relative">

        <img
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-500 
          ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          group-hover:scale-110`}
          src={download_url}
          alt={`Photo by ${author}`}
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
          group-hover:opacity-100 transition duration-300 
          flex items-center justify-center text-sm font-semibold">
          View Image
        </div>

      </div>

      <h2 className='font-bold text-lg mt-2 text-gray-200 
        group-hover:text-amber-400 transition-colors'>
        {author}
      </h2>
    </a>
  )
}

export default Card

