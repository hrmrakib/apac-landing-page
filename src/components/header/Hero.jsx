import { useEffect, useState } from "react";

const partners = [
  "/assets/digital-ocean.png",
  "/assets/azure.png",
  "/assets/github.png",
  "/assets/google-cloud.png",
  "/assets/linode.png",
  "/assets/cloud-flare.png",
];

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToContent = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className='min-h-screen bg-[#1A0303] text-white'>
      {/* Navigation */}

      {/* Hero Section */}
      <section className='container mx-auto px-4 pt-16 pb-32'>
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

            {/* <button className='bg-red-700 hover:bg-red-800 px-8 py-3 rounded-full text-lg font-medium transition-colors'>
              Lets have a call
            </button> */}

            <div className='flex flex-col items-center justify-center bg-transparent'>
              <button
                // onClick={scrollToContent}
                className='group relative px-8 py-4 rounded-full bg-red-600 text-white font-semibold text-lg transition-all duration-300 hover:bg-red-700 hover:scale-105'
              >
                {/* Glow effect */}
                <div className='absolute inset-0 rounded-full bg-red-600 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Button content */}
                <div className='relative flex items-center space-x-2'>
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
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <span>Lets have a call</span>
                </div>
              </button>

              {/* Scroll indicator */}
              <div
                className={`mt-16 animate-bounce transition-opacity duration-500 ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1'>
                  <div className='w-1 h-3 bg-gray-400 rounded-full animate-scroll'></div>
                </div>
                <div className='w-0.5 h-8 bg-gray-400 mx-auto mt-1'></div>
              </div>

              {/* Add custom animation for scroll indicator */}
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(8px);
                  }
                  100% {
                    transform: translateY(0);
                  }
                }
                .animate-scroll {
                  animation: scroll 2s infinite;
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className='mt-32 text-center'>
          <h3 className='text-gray-500 mb-12'>TRUSTED BY OUR PARTNERS</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70'>
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt={`Partner ${index + 1}`}
                width={120}
                height={40}
                className='h-20 w-auto'
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
