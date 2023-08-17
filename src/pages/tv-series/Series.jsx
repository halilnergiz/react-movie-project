import React from 'react';
import { SceneCard } from '../../components';
import { motion } from 'framer-motion';
import sceneAnimation from '../../animations/scene-animate';
import { useOutletContext } from 'react-router-dom';
import { searchedScene } from '../../utils/filtering';

const Series = () => {
  const scenes = JSON.parse(localStorage.getItem('scenes'));
  const [searchValue, setSearchValue] = useOutletContext(); 

  const allSeries = scenes?.map((item, index) => {
    if (item.variety === 'TV Series') {
      return (
        <SceneCard
          key={index}
          id={item.id}
          img={item.image} 
          name={item.name}
          year={item.year}
          variety={item.variety}
          kind={item.kind}
          bookmarked={item.bookmarked}
        />
      );
    }
  });

  const searchResult = searchedScene('variety', 'TV Series', searchValue);

  return (
    <section className='series-container'>
      {searchValue ? (
        <motion.div
          className='search-result'
          initial={'hidden'}
          animate={'visible'}
          variants={sceneAnimation}
        >
          <div className='searhed-datas'>{searchResult}</div>
        </motion.div>
      ) : (
        <motion.div
          initial='hidden'
          animate='visible'
          variants={sceneAnimation}
          className='series-content'
        >
          <div className='title'>
            <h3 style={{ color: 'white' }}>TV Series</h3>
          </div>
          {allSeries}
        </motion.div>
      )}
    </section>
  );
};

export default Series;
