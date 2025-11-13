import "./HomeTitle.css";

const HomeTitle = (props ) => {
    return(
        <>
        <div className="services-title">
            <span>{props.title}</span>
            <p>{props.heading}</p>
        </div>
        </>
    )
}


export default HomeTitle;