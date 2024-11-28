import React from "react";

const Navbar = () => {
  return (
    <div className='bg-[#1a0808]'>
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <a href='/' className='flex items-center space-x-2'>
            <img src='/logo.png' alt='RedTilt' className='w-auto h-12' />
            {/* <span className='text-xl font-bold'>RedTilt</span> */}
          </a>

          {/* Mobile Menu Button */}
          <button className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-16 6h16'
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-8'>
            <a
              href='/services'
              className='text-white hover:text-red-500 transition-colors'
            >
              Services
            </a>
            <a
              href='/reviews'
              className='text-white hover:text-red-500 transition-colors'
            >
              Reviews
            </a>
            <a
              href='/blog'
              className='text-white hover:text-red-500 transition-colors'
            >
              Blog
            </a>
            <a
              href='/jobs'
              className='text-white hover:text-red-500 transition-colors'
            >
              Jobs
            </a>
          </div>
          <div>
            <button className='text-white bg-red-700 hover:bg-red-800 px-6 py-2 rounded-full transition-colors'>
              Start a project
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
