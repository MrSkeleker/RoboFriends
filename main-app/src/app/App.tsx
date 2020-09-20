import React, { useState, useEffect } from 'react';

import styles from './App.module.scss';

import CardsList from '../components/CardsList/CardsList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';

function App() {
  const [robotsData, setRobotsData]: any = useState([]);
  const [searchField, setSearchField]: any = useState('');
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => setRobotsData(data));
  }, []);
  const filtredRobots = robotsData.filter((robot: any) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className={styles.app}>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox setSearch={setSearchField} searchValue={searchField} />
      <Scroll>
        {robotsData.length
        ? <div className={styles.loader}></div> 
        : <CardsList robots={filtredRobots} />}
      </Scroll>
    </div>
  );
}

export default App;
