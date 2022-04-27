import React from 'react';
import Header from '../components/Header';
import RecentOrders from '../components/recentOrders/recentOrders';
import Search from '../components/search/Search';

const Home = () =>  {
  return (
    <div>
      <Header />
      <p>Home Work's</p>
      <Search />
      <RecentOrders />
    </div>
  );
}

export default Home;
