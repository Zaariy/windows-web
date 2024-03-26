import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Tree} from "../../DataStructure/virtualFileSysTree/index"
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
  rootFolder :  NodeFolder[] 
}
const initialState   = {
    rootFolder : []
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
        searchByName: (state ) => {
           const tree =  new Tree(state.rootFolder); 
           console.log(tree.search('Deskto')); 
        },
        cleanFileSystemState: (state) => {
          state.rootFolder =  [];
        }
     }
}) 


export const {createFolder , cleanFileSystemState , createFile , searchByName} = FileSysSlice.actions ;
export default FileSysSlice.reducer ;
