export default function Hero() {
  return (
    <div className='min-h-screen bg-[#1a0808] text-white'>
      {/* Navigation */}
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <a href='/' className='flex items-center space-x-2'>
            <img
              src='/placeholder.svg'
              alt='RedTilt Logo'
              width={32}
              height={32}
              className='w-8 h-8'
            />
            <span className='text-xl font-bold'>RedTilt</span>
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
              className='hover:text-red-500 transition-colors'
            >
              Services
            </a>
            <a href='/reviews' className='hover:text-red-500 transition-colors'>
              Reviews
            </a>
            <a href='/blog' className='hover:text-red-500 transition-colors'>
              Blog
            </a>
            <a href='/jobs' className='hover:text-red-500 transition-colors'>
              Jobs
            </a>
            <button className='bg-red-700 hover:bg-red-800 px-6 py-2 rounded-full transition-colors'>
              Start a project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className='container mx-auto px-4 pt-16 pb-32'>
        <div className='relative'>
          {/* Decorative Circles */}
          <div className='absolute left-0 top-0 w-32 h-32 bg-red-900/20 rounded-full blur-xl' />
          <div className='absolute right-0 bottom-0 w-40 h-40 bg-red-900/20 rounded-full blur-xl' />

          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              From Concept to Code
            </h1>
            <h2 className='text-3xl md:text-5xl font-bold text-red-500 mb-6'>
              We Make IT Happen
            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              We Help Brands And B2B Enterprises Build Amazing Websites That
              Convert Their Visitors To Paying Customers.
            </p>
            <button className='bg-red-700 hover:bg-red-800 px-8 py-3 rounded-full text-lg font-medium transition-colors'>
              Lets have a call
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div className='mt-32 text-center'>
          <h3 className='text-gray-500 mb-12'>TRUSTED BY OUR PARTNERS</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70'>
            <img
              src='/placeholder.svg'
              alt='DigitalOcean'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
            <img
              src='/placeholder.svg'
              alt='Azure'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
            <img
              src='/placeholder.svg'
              alt='GitHub'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
            <img
              src='/placeholder.svg'
              alt='Google Cloud'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
            <img
              src='/placeholder.svg'
              alt='Linode'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
            <img
              src='/placeholder.svg'
              alt='Cloudflare'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
