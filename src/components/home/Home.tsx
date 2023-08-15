import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieList from './MovieList';
import SeriesList from './SeriesList';
import { fetchAllMovies, fetchAllSeries } from '../../store/slice/Collection';
import { AppDispatch } from '../../store/Store';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchData = async () =>{
      await dispatch(fetchAllMovies({search: 'india',page: 1}));
      await dispatch(fetchAllSeries());
    }

    fetchData();
  }, [dispatch])
  
  return (
    <div>
      <MovieList />
      <SeriesList />
    </div>
  )
}

export default Home