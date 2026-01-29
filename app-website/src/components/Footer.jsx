import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-gray-300 py-16 px-8 md:px-18 border-t border-gray-800 animate-fadeInUp'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div>
            <h3 className='text-white font-bold text-xl mb-4'>FinBank</h3>
            <p className='text-gray-400 text-sm'>Revolutionizing digital banking for everyone</p>
          </div>

          {/* Product */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Product</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='transition-smooth hover:text-white'>Features</a></li>
              <li><a href='#' className='transition-smooth hover:text-white'>Pricing</a></li>
              <li><a href='#' className='transition-smooth hover:text-white'>Security</a></li>
              <li><a href='#' className='transition-smooth hover:text-white'>API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Company</h4>
            <ul className='space-y-2'>
              <li><a href='#' className='transition-smooth hover:text-white'>About</a></li>
              <li><a href='#' className='transition-smooth hover:text-white'>Blog</a></li>
              <li><a href='#' className='transition-smooth hover:text-white'>Careers</a></li>
              <li><a href='#' className='transition-smooth hover:text-white'>Press</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Follow Us</h4>
            <div className='flex gap-4'>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-smooth hover:bg-blue-600'>
                <i className='ri-twitter-x-line'></i>
              </a>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-smooth hover:bg-blue-600'>
                <i className='ri-facebook-line'></i>
              </a>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-smooth hover:bg-blue-600'>
                <i className='ri-linkedin-line'></i>
              </a>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-smooth hover:bg-blue-600'>
                <i className='ri-instagram-line'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-500'>© 2024 FinBank. All rights reserved.</p>
            <div className='flex gap-6 text-sm'>
              <a href='#' className='transition-smooth hover:text-white'>Privacy Policy</a>
              <a href='#' className='transition-smooth hover:text-white'>Terms of Service</a>
              <a href='#' className='transition-smooth hover:text-white'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
