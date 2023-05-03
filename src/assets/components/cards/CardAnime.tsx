import { Link } from "react-router-dom";
import {CardAnimeProps} from "../../types/Types";

export default function CardAnime({ID,image,title,rates,status,age}:CardAnimeProps){
    return(
        <Link to={`/Anime/`+ID} className="card card-anime">
            <div className="card__image">
                <span className="span span-age">{age}+</span>
                <span className="span span-rates">{rates}</span>
                <span className="span span-status">{status}</span>
                <img className="img" src={image} alt={title} />
            </div>
            <div className="card__content">
                <h2 className="title general-title card-title">{title}</h2>
            </div>
        </Link>
    )
}