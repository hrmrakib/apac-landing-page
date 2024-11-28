const partners = [
  "/assets/digital-ocean.png",
  "/assets/azure.png",
  "/assets/github.png",
  "/assets/google-cloud.png",
  "/assets/linode.png",
  "/assets/cloud-flare.png",
];

export default function Hero() {
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
            <button className='bg-red-700 hover:bg-red-800 px-8 py-3 rounded-full text-lg font-medium transition-colors'>
              Lets have a call
            </button>
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
}
