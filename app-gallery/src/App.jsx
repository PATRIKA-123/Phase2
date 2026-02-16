import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import { motion, AnimatePresence } from "framer-motion"

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
  } else {
    content = userData.map((elem) => (
      <Card key={elem.id} elem={elem} />
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

      <div className='flex justify-center gap-6 items-center p-4 backdrop-blur-md'>

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


