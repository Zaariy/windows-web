import { globalIcons} from "../../../FileSystem/windowIcons/index";
import {Drives} from "./Drives";
import {Folders} from "./folders";
import {DisplayFolders} from "./displayFolder";
import {useSelector} from "react-redux";
import {RootState} from "../../../Services/store";
import {OperationBar} from "./operationBar";


export function Content () {
  const fetchFiles =  useSelector((state:RootState) => {
      return {
        rootFolder : state.fileSysSlice.rootFolder,
        recent : state.fileSysSlice.recent,
        openedFolder : state.fileSysSlice.openedFolder, 
        historyManger: state.fileSysSlice.historyManager,
        pathTracking: state.fileSysSlice.pathTracking
      }
  });

  return (
    <div className=" flex h-full ">
       <div className=" bg-black text-white h-full ">
          <div className="flex p-3 items-center">
            <img className=""  src={globalIcons.fileExplorerIcon} alt="file explorer" />
            <p className="pl-2 font-bold text-[14px] ">File Explorer</p>
          </div>
          <div className="search px-2 relative ">
            <input className="h-9 text-white outline-none rounded-md pl-2" name="search" type="text" placeholder="Search" />     
            <img  className="absolute w-[18px] top-[30%] right-[15px]" src={globalIcons.searchIcon} alt="search icon" />
          </div>
          <p className="my-6 ml-6">Recents</p>
          <div className="Recents px-2 ">
           <Folders folders={fetchFiles.recent} />       
          </div>
          <p className="my-6 ml-6">Drives</p>
          <div className="Drives px-2 ">
           <Drives />       
          </div>
       </div>    
       <div className="text-white bg-[#111118] w-full">
          <OperationBar fetchFiles={fetchFiles} />
          <div className="flex flex-wrap ml-6  mt-6">
            <DisplayFolders folders={fetchFiles}  />
          </div>
       </div>    
    </div>
    );
};



