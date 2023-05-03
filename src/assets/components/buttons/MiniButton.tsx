import {ChildrenProps} from "../../types/Types";

interface SwitherProps extends ChildrenProps {handelClick: (type:string) => void; type:string;}

export default function MiniButton({handelClick,type,children}:SwitherProps){
    return(
        <button onClick={() => handelClick(type)} className="button mini-button">{children}</button>
    )
}