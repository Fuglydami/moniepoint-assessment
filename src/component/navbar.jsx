import { HiBars3BottomRight } from 'react-icons/hi2';
import { PiToothDuotone } from 'react-icons/pi';
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='flex justify-between '
    >
      <div className='flex items-center'>
        <button className='outline-none border px-3 py-1 rounded-2xl border-gray-600 '>
          Menu
        </button>
        <button className='outline-none border px-1.5 p-1.5 border-gray-600 rounded-full '>
          <HiBars3BottomRight />
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <button className='outline-none  px-1.5 p-1.5 rounded-full  bg-orange-600 text-gray-200'>
          <PiToothDuotone />
        </button>
        <h2 className='font-semibold '>DENTYTECH</h2>{' '}
      </div>
      <div className='flex items-center'>
        {' '}
        <button className='outline-none border px-3 py-1 rounded-2xl border-gray-600'>
          Log In
        </button>
        <button className='bg-orange-600 hover:bg-orange-700 transition text-gray-200 outline-none  px-3 py-1 rounded-2xl '>
          Sign Up
        </button>
      </div>
    </motion.section>
  );
};

export default Navbar;
