import { SectionProps } from "../../types/Types";

export default function Section({insideContainer=false,className,sectionTitle,children}:SectionProps){
    return(
        <section className={`section ${className}`}>
            {sectionTitle && <h2 className="title general-title section-title">{sectionTitle}</h2>}
            {insideContainer ? <div className="container"><div className="section__content">{children}</div></div> : <div className="section__content">{children}</div>}
        </section>
    )
}