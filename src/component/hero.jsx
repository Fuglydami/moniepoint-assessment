import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className='uppercase absolute inset-0 flex items-center justify-center text-center'
    >
      <h1 className='tracking-normal text-9xl'>Our Advantages</h1>
    </motion.section>
  );
};
export default Hero;
