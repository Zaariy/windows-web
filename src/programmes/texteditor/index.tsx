import { Content } from "./content"
import { Window } from "../../components/window"
import { generateId } from "../../globalFunctionHelper"

const generateID =  generateId();

const  TextEditor = () => {
    return  (
        <Window key={generateID} id={generateID} width={1000} height={700} windowName="Text editor" >
            <Content />
        </Window>
    )
}


export  const textEditor = {id : generateID , component : <TextEditor /> }