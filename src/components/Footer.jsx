const Footer = () => {
  return (
    <footer className='mt-12 text-sm'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div>
          <h5 className='font-bold mb-2'>Company</h5>
          <ul className='space-y-1'>
            <li>
              <a href='#' className='hover:text-red-600'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Works
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Career
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-bold mb-2'>Help</h5>
          <ul className='space-y-1'>
            <li>
              <a href='#' className='hover:text-red-600'>
                Customer support
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-bold mb-2'>Resources</h5>
          <ul className='space-y-1'>
            <li>
              <a href='#' className='hover:text-red-600'>
                Free eBooks
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Development Tutorial
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                How to - Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Career
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8 flex justify-between items-center'>
        <p>© Copyright 2024. All Rights Reserved By Redtilt</p>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-red-600'>
            Twitter
          </a>
          <a href='#' className='hover:text-red-600'>
            Facebook
          </a>
          <a href='#' className='hover:text-red-600'>
            Instagram
          </a>
          <a href='#' className='hover:text-red-600'>
            Pinterest
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
