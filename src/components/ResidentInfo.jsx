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
        <div className="card">
            <img src={resident.image} alt="" />
            <h1>{resident.name}</h1>
            <h2>Status: {resident.status}</h2>
            <h3>Raza: {resident.species}</h3>
            <h3>Lugar de origen: {resident.origin?.name}</h3>
            <h3>Apariciones: {resident.episode?.length}</h3>
        </div>
    );
};

export default ResidentInfo;