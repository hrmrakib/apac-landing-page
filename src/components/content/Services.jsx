import { useState } from "react";

const services = [
  {
    title: "Development",
    icon: "⚙️",
    items: ["UI/UX", "DevOps", "Web design", "Frontend dev", "Backend dev"],
  },
  {
    title: "MSP",
    icon: "🌐",
    items: [
      "Infrastructure manage",
      "Managed Monitoring",
      "Business Continuity",
      "Managed Cyber",
    ],
  },
  {
    title: "Cloud",
    icon: "☁️",
    items: [
      "AWS",
      "AZURE",
      "Multi-Cloud",
      "SRE Strategy",
      "Server less",
      "Hybrid Strategy",
      "Containerisation",
    ],
  },
  {
    title: "Cyber",
    icon: "🛡️",
    items: [
      "Cyber Audit",
      "Cyber governance",
      "Security as a service",
      "Penetration Testin",
    ],
  },
];

const technologies = [
  { name: "JavaScript", image: "/placeholder.svg?height=50&width=50" },
  { name: "Flutter", image: "/placeholder.svg?height=50&width=50" },
  { name: "Prisma", image: "/placeholder.svg?height=50&width=50" },
  { name: "PostgreSQL", image: "/placeholder.svg?height=50&width=50" },
  { name: "Remix", image: "/placeholder.svg?height=50&width=50" },
  { name: "MongoDB", image: "/placeholder.svg?height=50&width=50" },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(technologies.length / 6);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className='min-h-screen bg-[#1a0808] text-white py-20'>
      {/* What we offer section */}
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-4'>What we offer</h2>
        <p className='text-center mb-12 text-gray-400'>
          Our Experts Will Help You In Following Fields
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='relative bg-red-900/30 backdrop-blur-sm rounded-lg p-6 group hover:bg-red-900/40 transition-all duration-300'
            >
              <div className='absolute -top-4 -left-4 text-6xl opacity-10 font-bold'>
                0{index + 1}
              </div>
              <div className='relative z-10'>
                <span className='text-2xl mb-4 inline-block'>
                  {service.icon}
                </span>
                <h3 className='text-xl font-semibold mb-4'>{service.title}</h3>
                <ul className='space-y-2'>
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-gray-300'
                    >
                      <span className='w-1.5 h-1.5 bg-red-500 rounded-full mr-2'></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Superpowers section */}
      <div className='container mx-auto px-4 mt-32'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          Our Superpowers
        </h2>

        <div className='relative'>
          <div className='flex justify-center items-center space-x-12 mb-8'>
            {technologies
              .slice(currentSlide * 6, (currentSlide + 1) * 6)
              .map((tech, index) => (
                <div
                  key={index}
                  className='w-20 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity'
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
              ))}
          </div>

          <div className='flex justify-center items-center space-x-2 mt-8'>
            <button
              onClick={prevSlide}
              className='p-2 rounded-full bg-red-900/30 hover:bg-red-900/50 transition-colors'
            >
              ←
            </button>
            <span className='text-sm text-gray-400'>
              {currentSlide + 1} / {totalSlides}
            </span>
            <button
              onClick={nextSlide}
              className='p-2 rounded-full bg-red-900/30 hover:bg-red-900/50 transition-colors'
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
