import {Window} from "../../components/window/index";
import {generateId} from "../../globalFunctionHelper/index"; 

import {Content} from "./content/index";
const id = generateId();

const FileExplorer = () => {
  return (
  <Window id={id} width={1000} height={700} windowName="File Explorer" >
      <Content />      
  </Window>
  ) 
}

export const fileExplorer = {id : id  , component: <FileExplorer />} ;
