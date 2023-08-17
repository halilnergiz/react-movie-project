import React from 'react';
import { SceneCard } from '../../components/index';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import sceneAnimation from '../../animations/scene-animate';
import { searchedScene } from '../../utils/filtering';

const Home = () => {
  const [searchValue, setSearchValue] = useOutletContext();
  const scenes = JSON.parse(localStorage.getItem('scenes'));

  const trendScenes = scenes?.map((item, index) => {
    if (item.rating >= 7.5) {
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

  const recommendingScenes = scenes?.map((item, index) => {
    if (item.rating < 7.5) {
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

  const searchResult = searchedScene('allScenes', null, searchValue);

  return (
    <section className='home-container'>
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
        <div className='home-content'>
          <div className='trending-area'>
            <h3 className='title trend'>Trending</h3>
            <motion.div
              className='trend-scenes'
              initial={'hidden'}
              animate={'visible'}
              variants={sceneAnimation}
            >
              {trendScenes}
            </motion.div>
          </div>
          <div className='recommending-area'>
            <h3 className='title recommend'>Recommending For You</h3>
            <motion.div
              className='recommending-scenes'
              initial={'hidden'}
              animate={'visible'}
              variants={sceneAnimation}
            >
              {recommendingScenes}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
