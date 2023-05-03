export interface ChildrenProps {children?:React.ReactNode;}
export interface SectionProps extends ChildrenProps {insideContainer?:boolean; className:string; sectionTitle?:string;}

export interface CardAnimeProps {ID:number; rates:number; age:number; image:string; title:string; status:string;}