import React, { useState, useEffect } from 'react'

const StatsSection = () => {
  const [stats, setStats] = useState({
    users: 0,
    transactions: 0,
    countries: 0,
    satisfaction: 0
  })

  useEffect(() => {
    // Animate counter
    const animateCounter = (start, end, duration, key) => {
      const increment = end / (duration / 16)
      let current = start
      
      const interval = setInterval(() => {
        current += increment
        if (current >= end) {
          setStats(prev => ({...prev, [key]: end}))
          clearInterval(interval)
        } else {
          setStats(prev => ({...prev, [key]: Math.floor(current)}))
        }
      }, 16)
    }

    animateCounter(0, 500000, 2000, 'users')
    animateCounter(0, 50000000, 2000, 'transactions')
    animateCounter(0, 45, 2000, 'countries')
    animateCounter(0, 98, 2000, 'satisfaction')
  }, [])

  return (
    <div className='w-full bg-gradient-to-b from-black to-gray-900 py-20 px-8 md:px-18'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Users */}
          <div className='bg-gradient-to-br from-blue-900/30 to-blue-700/20 rounded-2xl p-8 text-center border border-blue-700/50 animate-fadeInUp hover-lift transition-smooth'>
            <div className='text-5xl font-bold text-blue-400 mb-2'>{stats.users.toLocaleString()}+</div>
            <p className='text-gray-300 text-lg'>Active Users</p>
          </div>

          {/* Transactions */}
          <div className='bg-gradient-to-br from-green-900/30 to-green-700/20 rounded-2xl p-8 text-center border border-green-700/50 animate-fadeInUp hover-lift transition-smooth' style={{animationDelay: '0.1s'}}>
            <div className='text-5xl font-bold text-green-400 mb-2'>${(stats.transactions / 1000000).toFixed(0)}M</div>
            <p className='text-gray-300 text-lg'>Transactions</p>
          </div>

          {/* Countries */}
          <div className='bg-gradient-to-br from-purple-900/30 to-purple-700/20 rounded-2xl p-8 text-center border border-purple-700/50 animate-fadeInUp hover-lift transition-smooth' style={{animationDelay: '0.2s'}}>
            <div className='text-5xl font-bold text-purple-400 mb-2'>{stats.countries}+</div>
            <p className='text-gray-300 text-lg'>Countries</p>
          </div>

          {/* Satisfaction */}
          <div className='bg-gradient-to-br from-orange-900/30 to-orange-700/20 rounded-2xl p-8 text-center border border-orange-700/50 animate-fadeInUp hover-lift transition-smooth' style={{animationDelay: '0.3s'}}>
            <div className='text-5xl font-bold text-orange-400 mb-2'>{stats.satisfaction}%</div>
            <p className='text-gray-300 text-lg'>Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
