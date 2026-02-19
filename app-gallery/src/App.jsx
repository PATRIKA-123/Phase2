import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import { motion, AnimatePresence } from "framer-motion"

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showFavorites, setShowFavorites] = useState(false)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('gallery-favorites')
    return saved ? JSON.parse(saved) : []
  })

  const getData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      )

      setUserData(response.data)
    } catch (err) {
      setError("Failed to fetch images.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id]
    setFavorites(updatedFavorites)
    localStorage.setItem('gallery-favorites', JSON.stringify(updatedFavorites))
  }

  const displayedData = showFavorites 
    ? userData.filter(item => favorites.includes(item.id))
    : userData

  let content

  if (loading) {
    content = (
      <h3 className='text-gray-400 text-sm font-semibold'>
        Loading...
      </h3>
    )
  } else if (error) {
    content = (
      <h3 className='text-red-400 text-sm font-semibold'>
        {error}
      </h3>
    )
  } else if (displayedData.length === 0 && showFavorites) {
    content = (
      <h3 className='text-gray-400 text-sm font-semibold'>
        No favorites yet!
      </h3>
    )
  } else {
    content = displayedData.map((elem) => (
      <Card 
        key={elem.id} 
        elem={elem} 
        isFavorite={favorites.includes(elem.id)}
        onToggleFavorite={() => toggleFavorite(elem.id)}
      />
    ))
  }

  return (
    <div className='bg-gradient-to-b from-black to-gray-900 overflow-auto h-screen p-4 text-white'>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className='flex h-[82%] flex-wrap gap-6 p-2 justify-center'
        >
          {content}
        </motion.div>
      </AnimatePresence>

      <div className='flex justify-center gap-6 items-center p-4 backdrop-blur-md flex-wrap'>

        <motion.button
          onClick={() => setShowFavorites(!showFavorites)}
          animate={{ scale: showFavorites ? 1.05 : 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded font-semibold text-sm transition-all ${
            showFavorites 
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/50' 
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          ❤️ {showFavorites ? 'Favorites' : 'All'} ({favorites.length})
        </motion.button>

        <button
          disabled={index === 1 || loading}
          className={`bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold 
          transition active:scale-95
          ${index === 1 || loading ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-500"}`}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
            }
          }}
        >
          Prev
        </button>

        <h4 className='font-semibold'>Page {index}</h4>

        <button
          disabled={loading}
          className={`bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold 
          transition active:scale-95
          ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-500"}`}
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App


