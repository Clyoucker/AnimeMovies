import {useEffect,useState} from "react";

import MiniButton from "../buttons/MiniButton";
import DarkThemeIcon from "../../static/svgs/DarkThemeIcon";
import LightThemeIcon from "../../static/svgs/LightThemeIcon";

export default function ThemeSwither(){
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");

    useEffect(()=>{
        const page = document.querySelector(".page");
        page?.setAttribute("data-theme",String(theme));
        localStorage.setItem("theme",String(theme));
      },[theme])

    return(
        <div className="theme-swither">
            <MiniButton handelClick={setTheme} type="dark"><DarkThemeIcon /></MiniButton>
            <MiniButton handelClick={setTheme} type="light"><LightThemeIcon /></MiniButton>
        </div>
    )
}