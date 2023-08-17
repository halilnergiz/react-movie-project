import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home, Movies, Series, Bookmarked, NotFound } from '../pages/index';
import App from '../App';
import Scenes from '../mocks/scenes.json';

const router = () => {
  if (Scenes.length === 0) {
    throw new Error('Please define the mock scene data');
  } else if (!localStorage.getItem('scenes') && Scenes.length !== 0 ) { 
    localStorage.setItem('scenes', JSON.stringify(Scenes));
  }else if ( localStorage.getItem('scenes') !== JSON.stringify(Scenes)){ // restart when mock data is changed
    localStorage.setItem('scenes', JSON.stringify(Scenes));
  }

  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'movies',
          element: <Movies />,
        },
        {
          path: 'tv-series',
          element: <Series />,
        },
        {
          path: 'bookmarked',
          element: <Bookmarked />,
        },
        {
          path: '*',
          element: <NotFound />,
        }
      ],
    }
  ]);
};

export default router;
