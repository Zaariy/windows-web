import { Content } from "./content"
import { Window } from "../../components/window"
import { generateId } from "../../globalFunctionHelper"

const generateID =  generateId();

export const  TextEditor = (props) => {
    return  (
        <Window key={generateID} id={props.windowId ? props.windowId : generateID} width={1000} height={700} windowName={`Text editor [${props.fileName}]`} >
            <Content prop={{ initData:props.initData , getData : props.getData}} />
        </Window>
    )
}


export  const textEditor = {id : generateID , component : <TextEditor /> }
