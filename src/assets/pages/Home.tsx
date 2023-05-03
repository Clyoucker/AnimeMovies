import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

import SectionAnimeMovies from "../components/sections/SectionAnimeMovies";

export default function Home(){
    return(
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <SectionAnimeMovies />
                </div>
            </main>
            <Footer />
        </>
    )
}