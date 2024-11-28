import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companySize: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", newsletterEmail);
    // Handle newsletter subscription logic here
  };

  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row md:space-x-8'>
          {/* Left Section */}
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4'>
              Got a project in mind?
            </h2>
            <h1 className='text-3xl md:text-5xl font-bold mb-6'>
              Reserve a Call
            </h1>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <span className='text-red-600 mr-2'>•</span>
                <span>An in depth session to understand your needs</span>
              </li>
              <li className='flex items-start'>
                <span className='text-red-600 mr-2'>•</span>
                <span>Learn which plan is right for your team</span>
              </li>
              <li className='flex items-start'>
                <span className='text-red-600 mr-2'>•</span>
                <span>Get onboarding help</span>
              </li>
            </ul>
            <p className='mt-8'>
              Technical support or some query?
              <br />
              <a href='#' className='text-red-600 hover:underline'>
                Contact support →
              </a>
            </p>
          </div>

          {/* Right Section - Form */}
          <div className='md:w-1/2'>
            <form
              onSubmit={handleSubmit}
              className='bg-gray-900 p-6 rounded-lg'
            >
              <h3 className='text-xl font-bold mb-4'>
                Tell us about yourself.
              </h3>
              <div className='space-y-4'>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className='w-full bg-gray-800 p-2 rounded'
                  required
                />
                <input
                  type='email'
                  name='workEmail'
                  placeholder='Work Email'
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className='w-full bg-gray-800 p-2 rounded'
                  required
                />
                <select
                  name='companySize'
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className='w-full bg-gray-800 p-2 rounded'
                  required
                >
                  <option value=''>Company Size</option>
                  <option value='1-20'>1-20</option>
                  <option value='21-50'>21-50</option>
                  <option value='51-200'>51-200</option>
                  <option value='201+'>201+</option>
                </select>
                <textarea
                  name='message'
                  placeholder='How Can We Help?'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full bg-gray-800 p-2 rounded h-24'
                  required
                ></textarea>
              </div>
              <p className='text-sm mt-4 mb-4'>
                You Can Also Email Us At{" "}
                <span className='text-red-600'>Apac@Redtilt.Team</span>
              </p>
              <button
                type='submit'
                className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='mt-12'>
          <form
            onSubmit={handleNewsletterSubmit}
            className='bg-gray-900 p-6 rounded-lg flex flex-col md:flex-row items-center'
          >
            <div className='flex-grow mb-4 md:mb-0 md:mr-4'>
              <h4 className='font-bold mb-2'>Newsletter</h4>
              <p className='text-sm'>
                Be the first one to know about insights, technologies and
                innovations.
              </p>
            </div>
            <div className='flex w-full md:w-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className='flex-grow md:w-64 bg-gray-800 p-2 rounded-l'
                required
              />
              <button
                type='submit'
                className='bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition duration-300'
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
