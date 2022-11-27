import React from 'react';
import Landing from "../Landing"
import Advantages from "../Advantages"
import Featured from '../Featured';
import Discounts from '../Discounts'
import Explore from "../Explore"

const Home = () => {
    return (
        <div>
      <Landing />
      <Advantages />
      <Featured />
      <Discounts />
      <Explore />
        </div>
    );
}

export default Home;
