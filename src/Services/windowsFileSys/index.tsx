import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Tree} from "../../DataStructure/virtualFileSysTree/index";
import {HistoryManager} from "../../DataStructure/histroy/index";

interface NodeFile {
  id: string | null , 
  name: string | null ,
  data: any | null ,
  type: string ,
  path: string ,
  time: Date

}
interface NodeFolder extends NodeFile  {
  data: (NodeFolder | NodeFile)[],

}

type folderType = {
  folderName : string,
  path?: string
}
type fileType  =  folderType & {
  data?: string ,
}



type initType  = {
  rootFolder :  (NodeFolder | NodeFile )[], 
  recent :  NodeFolder[], 
  openedFolder : NodeFolder[], 
  historyManager : HistoryManager | null
  pathTracking:string ,
}
const initialState   = {
    rootFolder : [],
    recent : [],
    openedFolder : [],
    historyManager : new HistoryManager(),  
    // Bug Need to fix #1
    pathTracking: "",
}

// const filesSysTree = new Tree();
const FileSysSlice =  createSlice({
     name: "filesSystem", 
     initialState ,
     reducers: {
        createFolder : (state , action: PayloadAction<folderType> ) => {
          //... code 
          if(state.rootFolder.length === 0){
            const newFolder =  new Tree() ;

            newFolder.createFolder(action.payload.folderName , action.payload.path);
            state.rootFolder = newFolder.root.folders;
          }else {

            const newFolder =  new Tree(state.rootFolder) ;
            newFolder.createFolder(action.payload.folderName , action.payload.path);
          }

        },
        createFile : (state , action: PayloadAction<fileType> ) => {
          //... code 
          if(state.rootFolder.length === 0){
            const newFile =  new Tree() ;

            newFile.createFile(action.payload.folderName , action.payload.data ,action.payload.path  );
            state.rootFolder = newFile.root.folders;
          }else {

            const newFile =  new Tree(state.rootFolder) ;
            newFile.createFile(action.payload.folderName ,action.payload.data , action.payload.path);
          }

        },
        setRecentFolders : (state, action :PayloadAction<NodeFolder[]>) => {
            const mainFolders:string[] = ["Desktop" , "Downloads" , "Music" , "Photos"];
            state.recent = action.payload.filter(e => mainFolders.includes(e.name)); 
        },
        searchByName: (state ) => {
           const tree =  new Tree(state.rootFolder); 
        },
        setDataToFile: (state , action) => {
            const tree =  new Tree(state.rootFolder); 
            const file = tree.searchById(action.payload.id)[0];
            file.data =  action.payload.data;
            state.rootFolder =  tree.root.folders;
        },
        setOpenedFolder: (state , action ) => {
          state.openedFolder =  action.payload
        },
        pushNodeToHistoryManager:(state , action) => {
          const node:any = action.payload.node 
          state.historyManager.addState(node)
          const t =  node.name;
          state.pathTracking =  `${state.pathTracking} / ${t}`;
        },
        goBackToThePreviosNode:(state) => {
          const p:any = state.historyManager.goBack() ;
          state.openedFolder = p  ;
          // Need to add
          state.pathTracking =  "";
           
        } ,
        goForwardToTheNextNode: (state) => {
          const node:any = state.historyManager.goForward();
          state.openedFolder = node;  
        },
         
        cleanFileSystemState: (state) => {
          state.rootFolder =  [];
          // state.recent =  [];
        }
     }
}) 


export const {
  createFolder, 
  cleanFileSystemState , 
  createFile , 
  searchByName , 
  setRecentFolders , 
  setDataToFile,
  setOpenedFolder,
  pushNodeToHistoryManager,
  goBackToThePreviosNode ,
  goForwardToTheNextNode ,
  } = FileSysSlice.actions ;
export default FileSysSlice.reducer ;
