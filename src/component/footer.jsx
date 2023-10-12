import { PiYoutubeLogoThin } from 'react-icons/pi';
import { PiFacebookLogoThin } from 'react-icons/pi';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { PiArrowUpThin } from 'react-icons/pi';

const Footer = () => {
  return (
    <section className='flex justify-between my-8 w-11/12 md:w-9/12 items-center absolute bottom-5  '>
      <div className=''>
        <div className='h-1.5 w-1.5 flex  rounded-full bg-red-600' />
        <span className='text-sm text-gray-600'>Your smile, Our passion</span>
      </div>

      <div className='flex absolute -bottom-20    cursor-pointer  left-[50%]  justify-center border border-gray-500 rounded-full w-16 h-16 gap-2'>
        <PiArrowUpThin className='text-2xl rotate-180 mt-1 text-gray-600' />
      </div>

      <div className='text-gray-600'>
        <div className='flex text-[22px] justify-end items-center gap-5'>
          <div className='cursor-pointer'>
            <PiInstagramLogoThin />
          </div>
          <div className='cursor-pointer'>
            <PiYoutubeLogoThin />
          </div>
          <div className='cursor-pointer'>
            <PiFacebookLogoThin />
          </div>
        </div>
        <span className='text-sm text-gray-600'>Best Start Up of 2023</span>
      </div>
    </section>
  );
};

export default Footer;
