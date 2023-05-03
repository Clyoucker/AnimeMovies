import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

import SectionAnime from "../components/sections/SectionAnime";

export default function Anime(){
    return(
        <>
            <Header />
            <main className="main">
                <SectionAnime />
            </main>
            <Footer />
        </>
    )
}