import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18 animate-slideInRight'>
      <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full transition-smooth hover:shadow-lg hover:scale-105 duration-300 cursor-pointer'>Target Audience</h4>
      <button className='bg-gray-300 px-6 py-3 uppercase rounded-full tracking-widest text-sm transition-smooth hover:bg-white hover:shadow-lg duration-300 cursor-pointer'>digital Banking Platform</button>
    </div>
  );
}

export default Navbar;
