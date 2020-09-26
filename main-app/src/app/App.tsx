import React, {useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './App.module.scss';

import CardsList from '../components/CardsList/CardsList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import Header from '../components/Header/Header';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import { setSearchField, requestRobots } from '../redux/actions/actions';

function App(props: any) {
  const {robots, isPending, searchField, onSearchChange, onRequestRobots} = props;
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filtredRobots = robots.filter((robot: any) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className={styles.app}>
      <Header title='RoboFriends'/>
      <SearchBox setSearch={onSearchChange} searchValue={searchField} />
      <Scroll>
        <ErrorBoundary>
          {isPending
            ? <div className={styles.loader} />
            : <CardsList robots={filtredRobots} />}
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending
})

const mapDispatchToProps = (dispatch: any) => ({
  onSearchChange: (text: string) => dispatch(setSearchField(text)),
  onRequestRobots: () => dispatch(requestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
