import {useState , useReducer ,  useEffect} from "react";
import {matchIcon , globalIcons} from "../../../FileSystem/windowIcons/index";
import type {NodeFile , NodeFolder} from "../../../DataStructure/virtualFileSysTree/type";
import {Tree} from "../../../DataStructure/virtualFileSysTree/index";
import {useSelector , useDispatch} from "react-redux";
import {RootState}  from "../../../Services/store";
import {TextEditor} from "../../texteditor/index";
import {setDataToFile , setOpenedFolder ,pushNodeToHistoryManager } from "../../../Services/windowsFileSys/index";
import {pushNewWindowApp} from "../../../Services/windowUiStructure/index";
import {generateId} from "../../../globalFunctionHelper/index";

 

export function  DisplayFolders(props) {
    const {rootFolder  , openedFolder , stack} = props.folders ; 
    const [id  , addId ] = useState("");
    const dispatch =  useDispatch(); 

    const readFile = (id: string):void => {
      // useEffect(() => {} [id]) 
      const wid =  generateId() ;
      if(id){
        const tree =  new Tree(rootFolder);
        const results = tree.searchById(id)[0];
        dispatch(pushNewWindowApp({id : wid , component: <TextEditor windowId={wid} initData={results.data} fileName={results.name} getData={(data) => writeFile(id , data)} />}))
      }
    }

    const writeFile =  (id:string ,writeData:string): void => {
      // code
      dispatch(setDataToFile({id : id , data : writeData}));
      
    }

    useEffect(() => {
      readFile(id);
      return () => {
        // clean state
        addId('');
      }
      } , [id]);
    
    const addOpenedFolder =  (dispatch ,e):void => {
       dispatch(setOpenedFolder(e)); 
       dispatch(pushNodeToHistoryManager({node : e}));
    }
    
    const switchFolder = (selectedFolder , rootFolder) => {
        if(!selectedFolder){
          return rootFolder;
        }
        if(selectedFolder.length !== 0){
          return selectedFolder.data; 
        }
        return rootFolder 
    }
    
    return (
      <>
        {
          switchFolder(openedFolder , rootFolder).map((e : NodeFolder | NodeFile) => (
          <div key={e.id} className=" pr-6 cursor-pointer">
            <img onClick={() => e.type !== "folder" ?  addId(e.id) : addOpenedFolder(dispatch , e)  } src={e.type == "folder" ?  globalIcons.folder96 : globalIcons.file96} alt="folder" />
            <p className="text-center">{e.name}</p>
          </div>))
        }
      </>  
    ); 
}
