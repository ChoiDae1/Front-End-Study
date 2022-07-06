import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

Movie.prototypes = {
    id: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    CoverImage : PropTypes.string.isRequired,
    DescriptionFull : PropTypes.string,
    year: PropTypes.number.isRequired
}
function Movie({id, title, summary, genres, CoverImage, DescriptionFull, year}) {
    return (
            <div className={styles.movie}>
                <img src={CoverImage} alt={title} className={styles.movie__img}/>
                <div>
                    <h2 className={styles.movie__title}>
                        <Link to={`/movie/${id}`}>
                            {title}
                        </Link>
                    </h2>
                    <h3 className={styles.movie__year}>{year}</h3>
                    <p>{summary}</p>
                    <p>{DescriptionFull}</p>
                    <ul className={styles.movie__genres}>
                    Genres: {genres.map((g, index) => <li key={index}>{g}</li>)}
                    </ul>
                </div>
            </div>
    );
}

export default Movie;