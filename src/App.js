import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data"

export default function App(){
    const info=data.map(data=>{
        return <Card
            key={data.id}
            title={data.title}
            location={data.location}
            url={data.googleMapsUrl}
            sdate={data.startDate}
            edate={data.endDate}
            desc={data.description}
            img={data.imageUrl}

        />

    })
    return(
        <div className="app--box">
            <Nav/>
            {info}
            
        </div>


    )
}