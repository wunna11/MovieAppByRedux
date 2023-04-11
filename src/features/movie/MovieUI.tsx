import { Movie } from "./movieSlice";
import styles from './Movie.module.css'

export default function MovieUI({ movie }: any) {
    console.log('movie', movie)

    return (
        <div className={styles.movie}>
            <div className={styles.movieTitle}>
                Name: {movie.title}
            </div>
            <div>{movie.year}</div>
            <div>
                Director: {movie.director.name} 
            </div>
        </div>

    )
}