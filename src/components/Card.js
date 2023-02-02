import loc from "../images/location.png";

export default function Card(props){
    return(
        <div className="box">
            <div className="card">
                <img className="card--img" src={props.img} alt="image"/>
                <div className="card--text">
                    <div >
                        <img className="card--logo" src={loc} lt="location"/>
                        <p > {props.location} </p>
                        <a href={props.url}>View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <p className="date"> {props.sdate} - {props.edate} </p>
                    <p className="desc">{props.desc}</p>
                </div>
                
            </div>
            <hr/>

        </div>
    )
}