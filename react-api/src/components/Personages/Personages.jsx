import React, { useEffect, useState } from "react";
import './Personages.css';
import 'font-awesome/css/font-awesome.min.css';
import Communication from "services";
import ListPersonages from 'components/List/ListPersonage';
import { useParams } from "react-router-dom";

const Personages = () => {
    const { id } = useParams();
    const [ personages, setPersonages ] = useState(null);
    // const [ view, setView ] = useState("list");

    useEffect(() => {
        Communication.getMethod(1, `Personage&aa=${id}`)
        .then((res) => {
            console.log(res);
            console.log("/////////////////");
            setPersonages(res);
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        });
        return () => {
            setPersonages(null);
        }
    }, [])

    return (
        <>
            {personages !== null ? <ListPersonages personages={personages} /> : null }
        </>
    )
}

export default Personages;