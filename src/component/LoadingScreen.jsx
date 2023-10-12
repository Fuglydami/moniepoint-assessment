import { useEffect, useState } from 'react';
import { PiToothDuotone } from 'react-icons/pi';
import { RxArrowUp, RxArrowRight } from 'react-icons/rx';
import { motion, useAnimation } from 'framer-motion';

const LoadingScreen = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 2.5, delay: 0.3 },
      });
      await controls.start({
        opacity: 0,
        transition: { duration: 0, delay: 0.3 },
      });
      setAnimationComplete(true);
    };
    if (!animationComplete) {
      startAnimation();
    }
  }, [animationComplete, controls]);

  return (
    <section className='flex bg-yellow-50 justify-center items-center h-screen'>
      <motion.div
        className='outline-none grid  place-content-center h-16 w-16 rounded-full border-2 bg-white border-orange-600 text-orange-600'
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 1 }}
      >
        <RxArrowRight className='text-[36px]  font-bold' />
      </motion.div>

      <motion.div
        className='outline-none grid place-content-center h-16 w-16 rounded-full bg-orange-600 text-gray-200'
        initial={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        animate={controls}
      >
        <RxArrowRight className='text-[36px]' />
      </motion.div>

      <motion.div
        className='outline-none grid place-content-center h-16 w-16 rounded-full bg-white border-orange-600 text-orange-600'
        initial={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        animate={controls}
      >
        <RxArrowUp className='text-[36px]' />
      </motion.div>

      {animationComplete ? (
        <motion.div
          className='flex flex-col items-center gap-1'
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className='outline-none grid place-content-center h-16 w-16 rounded-full bg-orange-600 text-gray-200'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <PiToothDuotone className='text-[36px]' />
          </motion.div>
          <motion.h2
            className='text-orange-600 text-xl'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            DENTYTECH
          </motion.h2>
        </motion.div>
      ) : (
        <motion.div
          className='outline-none grid place-content-center h-16 w-16 rounded-full bg-orange-600 text-gray-200'
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          animate={controls}
        >
          <PiToothDuotone className='text-[36px]' />
        </motion.div>
      )}
    </section>
  );
};

export default LoadingScreen;
