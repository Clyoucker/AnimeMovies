import Section from "./Section";
import JsonAnime from "../../static/animeData.json";
// import DemonSlayer from "../../static/videos/Demon Slayer Kimetsu no Yaiba Swordsmith Village Arc.mp4";

export default function SectionAnimeMovies(){
    const data = JsonAnime.anime[0];
    return(
        <>
        <div className="background-poster">
            <img className="img" src="https://mobimg.b-cdn.net/v3/fetch/3d/3d7f51d6f41c877ccf79ba10d8b55300.jpeg" alt="" />
        </div>
        <div className="container">
            <Section className="section-anime-information">
                <div className="section__content-left">
                    <div className="card card-anime-two">
                        <div className="card__image"><img src={data.image} alt="" className="img" /></div>
                    </div>
                </div>
                <div className="section__content-right">
                    <div className="titles">
                        <h1 className="title title-rus">{data.title}</h1>
                        <h2 className="title title-eng">Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc</h2>
                    </div>
                    <div className="description">
                        <details>
                            <summary className="text">{data.desc[0]}</summary>
                            {data.desc.map((item,index) => index > 0 ? <p className="text">{item}</p> : null)}
                        </details>
                    </div>
                </div>
            </Section>
        </div>
        <div className="container">
            <Section className="section-anime-screnshots" sectionTitle="Screnshots">
                <div className="screnshots">
                    <img src="https://www.kino-teatr.ru/movie/kadr/167679/1381489.jpg" alt="" className="img screnshot" />
                    <img src="https://i.imgur.com/px0rHbL.jpg" alt="" className="img screnshot" />
                    <img src="https://i.ytimg.com/vi/iBEYSStIqYE/maxresdefault.jpg" alt="" className="img screnshot" />
                    <img src="https://www.kino-teatr.ru/movie/kadr/167679/1396251.jpg" alt="" className="img screnshot" />
                    <img src="https://www.leisurebyte.com/wp-content/uploads/2023/05/Screenshot-8498.png" alt="" className="img screnshot" />
                    <img src="https://www.kino-teatr.ru/movie/kadr/167679/1396249.jpg" alt="" className="img screnshot" />
                    <img src="https://www.kino-teatr.ru/movie/kadr/167679/1389799.jpg" alt="" className="img screnshot" />
                    <img src="https://www.kino-teatr.ru/movie/kadr/167679/1389801.jpg" alt="" className="img screnshot" />
                </div>
            </Section>
            <Section className="section-anime-video" sectionTitle="Codec">
                <video controls className="video" poster="https://i.pinimg.com/originals/c1/6b/74/c16b74fee8d22573bde948c4704f810f.jpg">
                    <source src="" className="source" />
                </video>
                <ul className="episodes">
                    <li className="episode">Trailer</li>
                    <li className="episode">1</li>
                    <li className="episode">2</li>
                    <li className="episode">3</li>
                    <li className="episode">4</li>
                </ul>
            </Section>
        </div>
        </>
    )
}
        // <Section className="section-anime">
        //     <video controls className="video">
        //         <source src="../../static/videos/Demon Slayer Kimetsu no Yaiba Swordsmith Village Arc.mp4" className="source" />
        //     </video>
        // </Section>