import { genres } from '../../utils/genre';
import './Something.css'

function Spsomething({name, genre, score, desc}) {
    return (
        <div className="movie">
            <h4>{name}</h4>
             <h4>{desc}</h4>
             <h4>{genres[genre]}</h4>
            <div className="movie_score">
                {Array(5).fill().map((_, i) => score < i ? "☆" : "★")}
            </div>
            <div className="movie_desc">
            </div>
        </div>
    );
}



export default Spsomething;



