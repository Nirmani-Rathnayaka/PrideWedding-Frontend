import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo,homeObjThree} from './Data';

function Products() {
  return (
    <>
    <br></br>

      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Products;
