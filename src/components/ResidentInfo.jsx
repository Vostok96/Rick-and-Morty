import axios from "axios";
import { useState, useEffect } from "react";
import Location from "./Location";


const ResidentInfo = ({residentUrl} ) => {
    const[resident, setResident] = useState({});

    
    useEffect(() => {
        axios
            .get(residentUrl)
            .then((resp)=>{
                console.log(resp.data)
                setResident(resp.data)
            })
            .catch(error => console.error(error))
    },[residentUrl])
    return (
        <div className="cards">
            <div className="card">
                <img className="imgResident" src={resident.image} alt="" />
                <h1>{resident.name}</h1>
                <h2><span style={{ fontSize: '70px', color: resident.status === 'Alive' ? 'red' : 'grey' }} >.</span> <span> {resident.status}</span> </h2>
                <h3> <span className="word">Raza:</span><span className="concept">{resident.species}</span></h3>
                <h3> <span className="word">Lugar de origen: </span><span className="concept">{resident.origin?.name}</span></h3>
                <h3> <span className="word">Apariciones: </span><span className="concept">{resident.episode?.length}</span></h3>
            </div>
        </div>
    );
};

export default ResidentInfo;