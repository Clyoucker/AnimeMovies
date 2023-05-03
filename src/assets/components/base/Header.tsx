import { Link } from "react-router-dom";

import Logo from "../../static/svgs/Logo";
import ThemeSwither from "../swither/ThemeSwither";

export default function Header(){
    return(
        <header className="header">
            <div className="container header-container">
                <div className="header__body">
                    <Link className="link logo-link" to="/"><Logo/></Link>
                    {/* <nav className="header-menu">
                        <li className="li"><Link className="link header-link" to="">Случайное Аниме</Link></li>
                        <li className="li"><Link className="link header-link" to="">Случайное Аниме</Link></li>
                        <li className="li"><Link className="link header-link" to="">Случайное Аниме</Link></li>
                    </nav> */}
                    <ThemeSwither />
                </div>
            </div>
        </header>
    )
}