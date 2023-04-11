import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


export interface Director {
    name: string
    phoneNo: string
}

export interface Movie {
    id: string 
    title: string
    director: Director
    year:number,
}

export interface MovieList {
    items: Array<Movie>
}

const initialState: MovieList = {
    items: [
        {
            id: '1',
            title: 'Game of thrones',
            director: {
                name: 'Wunna',
                phoneNo: '0984435543'
            },
            year: 1994
        },

        {
            id: '2',
            title: 'You',
            director: {
                name: 'John Doe',
                phoneNo: '092232332'
            },
            year: 1998
        },
    ]
}


export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie>) => {
            console.log("Payload ", action); // action.payload -> {id: 4, text: 'bla bla'}
            state.items.push(action.payload)
        },
    },
});

export const { addMovie } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movie.items;

export default movieSlice.reducer;
