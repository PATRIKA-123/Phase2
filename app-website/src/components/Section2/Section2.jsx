import React from 'react'

const Section2 = () => {
  const features = [
    {
      icon: '💳',
      title: 'Instant Transfers',
      description: 'Send money to anyone, anywhere in seconds'
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your money is protected with military-grade encryption'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Track spending and manage budgets effortlessly'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Access banking services from any part of the world'
    },
    {
      icon: '⚡',
      title: 'Zero Fees',
      description: 'No hidden charges, transparent pricing always'
    },
    {
      icon: '📱',
      title: '24/7 Support',
      description: 'Customer support available round the clock'
    }
  ]

  return (
    <div className='w-full bg-gradient-to-b from-gray-900 to-black py-20 px-8 md:px-18'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-20 animate-fadeInUp'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Why Choose Us?
          </h2>
          <p className='text-xl text-gray-300'>
            Experience banking redefined with cutting-edge technology and customer-first approach
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className='bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 transition-smooth hover-lift animate-scaleIn'
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className='text-5xl mb-4'>{feature.icon}</div>
              <h3 className='text-2xl font-bold text-white mb-3'>{feature.title}</h3>
              <p className='text-gray-400 leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center animate-fadeInUp'>
          <button className='bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-4 rounded-full text-lg font-semibold transition-smooth hover:shadow-2xl hover:scale-105 duration-300'>
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section2
