import React, { useEffect } from 'react';

import styles from './MainPage.module.scss';

import CardsList from '../CardsList/CardsList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import Header from '../Header/Header';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function MainPage(props: any) {
    const { robots, isPending, searchField, onSearchChange, onRequestRobots } = props;
    useEffect(() => {
        onRequestRobots();
    }, [onRequestRobots]);
    const filtredRobots = robots?.filter((robot: any) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className={styles.mainPage}>
            <Header title='RoboFriends' />
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

export default MainPage;