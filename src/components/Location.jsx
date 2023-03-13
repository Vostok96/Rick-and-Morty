import { useState, useEffect } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";

const Location = () => {
    
        const [location, setLocation]= useState({})
        const [randomIndex, setRandomIndex] = useState(0);


        const getRandomId = () => {
            return Math.floor(Math.random() * 126) + 1;
          };

    useEffect(()=>{
        
        axios
            .get(`https://rickandmortyapi.com/api/location/${getRandomId()}`)
            .then((resp)=>{
                console.log(resp.data)
                setLocation(resp.data)
                setRandomIndex(Math.floor(Math.random() * resp.data.residents.length));
            })
            .catch(error => console.error(error))

    },[])    
    
    return (
        


        <div>
            <div className="name">
                Nombre : <br />
                {location.name}
            </div>


            <div className="type">
                Tipo: <br />
                {location.type}
            </div>


            <div className="dimension">
                Dimensión: <br />
                {location.dimension}
            </div>


            <div className="residents">
                Población: <br />
                {location.residents?.length}
                    
            </div>


            {location.residents && location.residents.map((residentUrl, index) => (
                <ResidentInfo key={index} residentUrl={residentUrl} />
            ))}
        </div>
    );
};

export default Location;