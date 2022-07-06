import PropTypes from "prop-types";
import {Link} from "react-router-dom";

Movie.prototypes = {
    id: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    CoverImage : PropTypes.string.isRequired,
    DescriptionFull : PropTypes.string
}
function Movie({id, title, summary, genres, CoverImage, DescriptionFull}) {
    return (
            <div>
       
                <h2>Title: <Link to={`/movie/${id}`}>{title}</Link></h2>
                <p>{summary}</p>
                <p>{DescriptionFull}</p>
                <ul>
                Genres: {genres.map((g, index) => <li key={index}>{g}</li>)}
                </ul>
                <img src={CoverImage} alt={title}/>
            </div>
    );
}

export default Movie;