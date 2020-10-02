import React from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../redux/actions/actions';

import MainPage from '../components/MainPage/MainPage';

function App(props: any) {
  return <MainPage {...props}/>
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
