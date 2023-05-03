import Section from "./Section";
import CardAnime from "../cards/CardAnime";
import JsonDatas from "../../static/animeData.json";

export default function SectionAnimeMovies(){
    const datas = JsonDatas.anime;
    return(
        <Section className="section-anime-movies" sectionTitle="Аниме">
            {datas.map(item => <CardAnime key={item.ID} ID={item.ID} age={item.age} rates={item.rates} status={item.status} title={item.title} image={item.image} />)}
        </Section>
    )
}