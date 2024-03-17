import { useState , useEffect } from 'react';
import { Window } from '../../components/window';
import type {T} from "./type";
import {Content} from "./content/index" ;
import { fetchSystemData } from './functionHelper';
import {generateId} from "../../globalFunctionHelper/index"


const generateID =  generateId()

const TaskManger =  () => {
    const [resourcesUsage , setResourcesUsage] = useState<T>() ; 

    useEffect(() => { 
        // every 1 seconde we fetch the usage of Cpu and Ram from backend API

        const e = setInterval(() => {
            fetchSystemData(setResourcesUsage)

        }, 1000)

        return () => {
            clearInterval(e);
            setResourcesUsage({Interval : 0 , CPU_Usage : "" , RAM_Usage : ""}) ;
        }
    }, [])

    
    return(
    <Window key={generateID} id={generateID} windowName='Task manager' width={1000} height={700}  >
        <Content data={resourcesUsage} />
    </Window>
    )
}


export  const taskmanger = {id : generateID , component : <TaskManger /> }