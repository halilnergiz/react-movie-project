import { SceneCard } from '../components';

const scenes = JSON.parse(localStorage.getItem('scenes'));

export const searchedScene = (sceneProperty, propertyValue, searchValue) => {
  const selectOfSceneVariety = sceneProperty === 'allScenes' ? scenes : scenes?.filter((scene) => scene[sceneProperty] === propertyValue);

  const filteredSceneArray = selectOfSceneVariety?.filter((scene) =>
    scene.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return filteredSceneArray?.length === 0 ? (
    <h1 className='result-not-found'> Result Not Found </h1>
  ) : (
    filteredSceneArray?.map((item, index) => {
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
    })
  );
};
