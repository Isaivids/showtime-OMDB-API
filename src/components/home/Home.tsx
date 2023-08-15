import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieList from './MovieList';
import SeriesList from './SeriesList';
import { clearMovies, clearSeries, fetchAllMovies, fetchAllSeries } from '../../store/slice/Collection';
import { AppDispatch } from '../../store/Store';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () =>{
      await dispatch(fetchAllMovies({search: 'sun',page: 1}));
      await dispatch(fetchAllSeries());
    }
    console.log('Calling')
    fetchData();
    return () => {
      dispatch(clearMovies());
      dispatch(clearSeries());
    }
  }, [dispatch]);
 
  return (
    <div>
      <MovieList />
      <SeriesList />
    </div>
  )
}

export default Home