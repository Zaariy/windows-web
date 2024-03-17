import "./main.css";
import { Window } from "../../components/window" ;
import { customAlphabet } from 'nanoid';
import { Loading } from "../../components/loading/index";
import { useEffect, useState } from "react";
import {Content} from "./content/index";
import type { T } from "./type";
import { generateId } from "../../globalFunctionHelper";

import { fetchSystemData } from "./functionHelper";

const generateID =  generateId();




const SystemInformation  = ()  => {
    const [computerInfo , setComputerInfo] = useState<T>() ; 
    const [loading , setLoading] = useState<boolean>(false) ;
    useEffect(() => {
        
        // fetch some data
        fetchSystemData(setComputerInfo , () => {
            setLoading(true)
        })

        return () => {
            // setComputerInfo() ;
            setLoading(false)
        }
    } , [])

    return (
    <Window  key={generateID} id={generateID} windowName="System" width={1000} height={800}   >
        {loading ? <Content data={computerInfo} /> : <Loading />} 
    </Window> 
    )
}

export  const systemInformation = {id : generateID , component : <SystemInformation /> }

