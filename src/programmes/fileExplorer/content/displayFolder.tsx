import {useState , useReducer ,  useEffect} from "react";
import {matchIcon , globalIcons} from "../../../FileSystem/windowIcons/index";
import type {NodeFile , NodeFolder} from "../../../DataStructure/virtualFileSysTree/type";
import {Tree} from "../../../DataStructure/virtualFileSysTree/index";
import {useSelector , useDispatch} from "react-redux";
import {RootState}  from "../../../Services/store";
import {TextEditor} from "../../texteditor/index";
import {setDataToFile} from "../../../Services/windowsFileSys/index";
import {pushNewWindowApp} from "../../../Services/windowUiStructure/index"

 

export function  DisplayFolders() {
    const folders =  useSelector((state : RootState) => state.fileSysSlice.rootFolder)
    const initailState = {id : "" , data : ""  };
    const reducer = (state , action) => {
      switch (action.type) {
        case "addId":
            return {...state , id : action.id} 
          break;
        case "addData" :
            return {...state , data : action.data}; 
            break;
        default:
          return state ;
          break;
      }
    }
    const [file , localDispatch] =  useReducer(reducer , initailState);
    const dispatch =  useDispatch(); 
    const get =  (e) => {

    }
    
    const readFile = () => {
      // useEffect(() => {} [id]) 
      if(file.id){
        const tree =  new Tree(folders);
        // localDispatch({type: "addData"  , data : tree.searchById(file.id)[0].data});
        dispatch(pushNewWindowApp({id : "ee22" , component: <TextEditor windowId={"ee22"} initData={tree.searchById(file.id)[0].data} getData={writeFile} />}))
      }
    }

    const writeFile =  (writeData:string) => {
      // code
      dispatch(setDataToFile({id : file.id , data : writeData}));
      
    }

    useEffect(() => {
      readFile();
      return () => {
        // clean state
        localDispatch({type : "addId" , id : ''});
      }
      } , [file.id]);
    
    return (
      <>
        {
          folders.map((e : NodeFolder | NodeFile) => (
          <div key={e.id} className=" pr-6 cursor-pointer">
            <img onClick={() => e.type !== "folder" ? localDispatch({type : "addId" , id : e.id}) : null } src={e.type == "folder" ?  globalIcons.folder96 : globalIcons.file96} alt="folder" />
            <p className="text-center">{e.name}</p>
          </div>))
        }
      </>  
    ); 
}
