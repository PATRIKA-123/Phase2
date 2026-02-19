import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ elem, isFavorite, onToggleFavorite }) => {

  const { url, download_url, author } = elem
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div className="relative group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
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

      <motion.button
        onClick={(e) => {
          e.preventDefault()
          onToggleFavorite()
        }}
        animate={{ scale: isFavorite ? 1.1 : 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-2 right-2 text-2xl bg-black bg-opacity-60 
          rounded-full p-2 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 hover:bg-opacity-80"
      >
        {isFavorite ? '❤️' : '🤍'}
      </motion.button>
    </div>
  )
}

export default Card

