import { useState } from "react";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 16;

  return (
    <div className='min-h-screen bg-[#1a0f0f] text-white p-4 md:p-8'>
      {/* Blog Header Section */}
      <section className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-gray-300 mb-2'>Read Our Blog</h2>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>
          Read Daily news about
          <br />
          startup companies
        </h1>
      </section>

      {/* Featured Post Card */}
      <section className='max-w-6xl mx-auto mb-12'>
        <div className='bg-[#2a1f1f] rounded-2xl overflow-hidden'>
          <div className='grid md:grid-cols-2 gap-6 p-6'>
            <div className='relative h-[300px] md:h-[400px]'>
              <img
                src='/placeholder.svg?height=400&width=600'
                alt='Featured post img'
                fill
                className='object-cover rounded-lg'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  Not Another Framework
                </h2>
                <p className='text-gray-300 mb-6'>
                  We brought all the Remix goodies over to React Router and made
                  improvements in the process. Now it's time to bring those
                  improved APIs back over to Remix where they started!
                </p>
                <div className='flex gap-3 mb-6'>
                  <span className='inline-flex items-center text-sm text-red-500'>
                    <span className='w-2 h-2 bg-red-500 rounded-full mr-2'></span>
                    Collaboration Tools
                  </span>
                  <span className='inline-flex items-center text-sm text-red-500'>
                    <span className='w-2 h-2 bg-red-500 rounded-full mr-2'></span>
                    Collaboration Tools
                  </span>
                </div>
              </div>
              <div className='flex justify-end'>
                <button className='p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Call Section */}
      <section className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
        <div>
          <h3 className='text-gray-400 mb-2'>Got a project in mind?</h3>
          <h2 className='text-3xl font-bold mb-8'>Reserve a Call</h2>
          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 bg-red-500 rounded-full mt-2'></span>
              <span>An in depth session to understand your needs</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 bg-red-500 rounded-full mt-2'></span>
              <span>Learn which plan is right for your team</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 bg-red-500 rounded-full mt-2'></span>
              <span>Get onboarding help</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-6'>
            Tell us about yourself.
          </h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm text-gray-400 mb-1'>
                Full Name
              </label>
              <input
                type='text'
                className='w-full bg-[#2a1f1f] rounded-lg p-3 border border-gray-700 focus:outline-none focus:border-red-500'
                placeholder='TAHA HAIDER'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-400 mb-1'>
                Work Email
              </label>
              <input
                type='email'
                className='w-full bg-[#2a1f1f] rounded-lg p-3 border border-gray-700 focus:outline-none focus:border-red-500'
                placeholder='Syed.Shah@Reddit.Team'
              />
            </div>
            <div>
              <label className='block text-sm text-gray-400 mb-1'>
                Company Size
              </label>
              <input
                type='text'
                className='w-full bg-[#2a1f1f] rounded-lg p-3 border border-gray-700 focus:outline-none focus:border-red-500'
              />
            </div>
          </form>

          <div className='flex items-center justify-between mt-6'>
            <div className='flex items-center gap-2'>
              <button
                className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors'
                onClick={() => setCurrentSlide(Math.max(1, currentSlide - 1))}
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
              <span className='text-sm'>
                {currentSlide}/{totalSlides}
              </span>
              <button
                className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors'
                onClick={() =>
                  setCurrentSlide(Math.min(totalSlides, currentSlide + 1))
                }
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>

            <button className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'>
              <svg
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
