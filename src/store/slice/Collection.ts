import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { MovieAPI } from '../../api/MovieAPI'

export interface State {
    searchString: string,
    currentPageM: number,
    movieList: {},
    loading: boolean,
    error: boolean,
    seriesList: {},
    loadingS: boolean,
    errorS: boolean
}

const initialState: State = {
    searchString: '',
    currentPageM: 1,
    movieList: {},
    loading: true,
    error: false,
    seriesList: {},
    loadingS: true,
    errorS: false
}

export const fetchAllMovies = createAsyncThunk('movies/getAll', async (obj: any) => {
    const searchString = obj.search;
    const page = obj.page;
    const type = 'movie';
    const currentYear = new Date().getFullYear();
    const response = await MovieAPI.get(`?apikey=da6c85db&s=${searchString}&page=${page}&type=${type}&y=${currentYear}`);
    return response.data;
})

export const fetchAllSeries = createAsyncThunk('series/getAll', async () => {
    const searchString = 'man';
    const page = 1;
    const type = 'series';
    const currentYear = new Date().getFullYear();
    const response = await MovieAPI.get(`?apikey=da6c85db&s=${searchString}&page=${page}&type=${type}&y=${currentYear}`);
    return response.data;
})

const CollectionSlice = createSlice({
    initialState,
    name: 'collection',
    reducers: {
        clearMovies: (state) => {
            return {...state, movieList : {}}
        },  
        clearSeries: (state) => {
            return {...state, seriesList : {}}
        }, 
    },
    extraReducers: (builder) => {
        //movies
        builder.addCase(fetchAllMovies.pending, (state, payload) => {
            const page = payload.meta.arg.page;
            const search = payload.meta.arg.search;
            return { ...state, loading: true, currentPageM: page, searchString: search }
        })
        builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
            return { ...state, movieList: payload, error: false, loading: false }
        })
        builder.addCase(fetchAllMovies.rejected, (state) => {
            return { ...state, loading: false, error: true }
        })
        //series
        builder.addCase(fetchAllSeries.pending, (state) => {
            return { ...state, loadingS: true }
        })
        builder.addCase(fetchAllSeries.fulfilled, (state, { payload }) => {
            return { ...state, seriesList: payload, errorS: false, loadingS: false }
        })
        builder.addCase(fetchAllSeries.rejected, (state) => {
            return { ...state, loadingS: false, errorS: true }
        })
    }
})
export const { clearMovies,clearSeries } = CollectionSlice.actions;
export default CollectionSlice.reducer;