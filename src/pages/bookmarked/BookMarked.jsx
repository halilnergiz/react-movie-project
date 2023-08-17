import React from 'react';
import { SceneCard } from '../../components/index';
import { motion } from 'framer-motion';
import sceneAnimation from '../../animations/scene-animate';
import { useOutletContext } from 'react-router-dom';
import { searchedScene } from '../../utils/filtering';

const BookMarked = () => {
  const scenes = JSON.parse(localStorage.getItem('scenes'));
  const [searchValue, setSearchValue] = useOutletContext();
  
  const bookmarkedMovies = scenes?.map((item, index) => {
    if (item.bookmarked === true && item.variety === 'Movie') {
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

  const bookmarkedTvSeries = scenes?.map((item, index) => {
    if (item.bookmarked === true && item.variety === 'TV Series') {
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

  const checkBookmarkedMovie = scenes?.filter(
    (item) => item.bookmarked === true && item.variety === 'Movie'
  ).length;

  const checkBookmarkedSeries = scenes?.filter(
    (item) => item.bookmarked === true && item.variety === 'TV Series'
  ).length;


  const searchResult = searchedScene('bookmarked', true, searchValue);

  return (
    <section className='bookmarked-container'>
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
        <div className='bookmarked-content'>
          <div className='bookmarked-movies'>
            {checkBookmarkedMovie ? (
              <h3 className='title recommend'>Bookmarked Movies</h3>
            ) : null}
            <motion.div
              className='movies-scenes'
              initial={'hidden'}
              animate={'visible'}
              variants={sceneAnimation}
            >
              {bookmarkedMovies}
            </motion.div>
          </div>
          <div className='bookmarked-series'>
            {checkBookmarkedSeries ? (
              <h3 className='title recommend'>Bookmarked TV Series</h3>
            ) : null}
            <motion.div
              className='series-scenes'
              initial={'hidden'}
              animate={'visible'}
              variants={sceneAnimation}
            >
              {bookmarkedTvSeries}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookMarked;
