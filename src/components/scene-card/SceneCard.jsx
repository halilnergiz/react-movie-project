import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sliderRight from '../../animations/scene-animate';
import { BsBookmark, BsFillBookmarkFill, BsDot } from 'react-icons/bs';
import { MdLocalMovies } from 'react-icons/md';
import { PiTelevisionBold } from 'react-icons/pi';

const SceneCard = ({ id, img, name, year, variety, kind, bookmarked }) => {
  const [booked, setBooked] = useState(bookmarked);

  const setBookedScene = async () => {
    setBooked(!booked);

    const scenes = JSON.parse(localStorage.getItem('scenes'));
    const selectedScene = scenes?.find((item) => {
      return item.id === id;
    });

    selectedScene.bookmarked = !booked;
    localStorage.setItem('scenes', JSON.stringify(scenes));
  };

  return (
    <motion.div className='scene-container' variants={sliderRight}>
      <div className='scene-image'>
        <button className='btn-mark' onClick={setBookedScene}>
          <div className='icon-container'>
            {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
          </div>
        </button>
        <img src={img} alt='' />
      </div>
      <div className='scene-informations'>
        <div className='sub-inf'>
          <span className='year'>{year}</span>
          <BsDot />
          <span className='scene-variety-icon'>
            {variety === 'Movie' ? <MdLocalMovies /> : <PiTelevisionBold />}
          </span>
          <span className='scene-variety'>{variety}</span>
          <BsDot />
          <span className='scene-kind'>{kind}</span>
        </div>
        <div className='name-inf'>
          <span className='scene-name'>{name}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SceneCard;
