import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSetting } from 'react-icons/ai';

const StackedCards = () => {
  const [cards, setCards] = useState([1, 2, 3, 4]);
  const cardImages = [
    'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6627561/pexels-photo-6627561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const handleCardClick = () => {
    if (cards.length > 0) {
      setCards((prevCards) => prevCards.slice(0, -1));
    }
  };

  return (
    <motion.div
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className='container  absolute top-[40%] left-[40%]'
    >
      <div>
        {cards.map((card, index) => {
          const rotationAngle = -(index * 12) - 0;
          return (
            <div key={index}>
              {index === 0 && (
                <div className='flex items-center absolute left-12 top-60 z-50'>
                  <div className='p-2  rounded-full bg-white text-gray-600'>
                    <AiOutlineSetting className='text-lg' />
                  </div>
                  <div className=' rounded-full px-3 py-1 bg-white text-gray-700'>
                    Advanced Technology
                  </div>
                </div>
              )}
              <motion.img
                initial={{ y: 0 }}
                transition={{ duration: 1.5 }}
                animate={{
                  y: -50,
                  rotate: `${rotationAngle}deg`,
                }}
                loading='lazy'
                decoding='async'
                onClick={handleCardClick}
                style={{
                  position: 'absolute',

                  zIndex: cards.length - index,
                }}
                src={cardImages[index]}
                alt={`Card ${card}`}
                className='card bg-gray-300 cursor-pointer object-cover rounded-3xl w-[300px] h-[370px] grid place-content-center shadow-md m-2'
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StackedCards;
