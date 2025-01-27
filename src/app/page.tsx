import React from 'react'; 
import CompanyLogo from './components/com-logo';
import FeaturedProducts from './components/f-products';
import Header from './components/header';
import HotCategory from './components/hot';
import OurProducts from './components/our-p';
import TopCategories from './components/top-c';

const Home: React.FC = () => {
  return (
    <div className="space-y-10">
    
      <Header  />

     
      <CompanyLogo  />

    
      <FeaturedProducts  />

      
      <TopCategories  />

  
      <HotCategory  />

    
      <OurProducts  />
    </div>
  );
};

export default Home;
