import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import MovieList from './features/movie/MovieList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


    return (        
            <div className="App">
                <MovieList />
            </div>         
    );
}

export default App;
