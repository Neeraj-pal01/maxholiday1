import React from 'react';
import HomeSection from './HomeSection';
import IncredibleIndiaTours from './IncredibleIndiaTours';
import ExploreDestinations from './ExploreDestinations';
import MostPopularTrakking from './MostPopularTrakking';


const Home = () => {
  return (
    <div>
      <HomeSection />
      <IncredibleIndiaTours />
      <ExploreDestinations />
      <MostPopularTrakking/>
    </div>
  );
}

export default Home;
