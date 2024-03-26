import { globalIcons} from "../../../FileSystem/windowIcons/index";
import {Drives} from "./Drives";
import {Folders} from "./folders";
import {DisplayFolders} from "./displayFolder";
import {useSelector} from "react-redux";
import {RootState} from "../../../Services/store";


export function Content () {
  const fetchFiles =  useSelector((state:RootState) => state.fileSysSlice.rootFolder);

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
           <Folders folders={fetchFiles} />       
          </div>
          <p className="my-6 ml-6">Drives</p>
          <div className="Drives px-2 ">
           <Drives />       
          </div>
       </div>    
       <div className="text-white bg-[#111118] w-full">
          <OperationBar />
          <div className="flex flex-wrap ml-6  mt-6">
            <DisplayFolders />
          </div>
       </div>    
    </div>
    );
};




function OperationBar() {
   return (
      <div className="flex w-full justify-between items-center mt-5">
        <div className="flex flex-2 w-[30%] items-center ">
          <img className="cursor-pointer mx-6 h-[25px]" src={globalIcons.leftArrow} alt="left arrow" />
          <img className="cursor-pointer mx-6 h-[25px]" src={globalIcons.rightArrow} alt="right arrow" />
          <img className="cursor-pointer mx-6 h-[25px]" src={globalIcons.reloadIcon} alt="reload icon" />
        </div>
         <div className="search-file px-2 relative flex-1 w-[70%] ">
            <input className="h-9 text-white outline-none rounded-md pl-2 w-full" name="search-file" type="text" value="Desktop > Files" />
            <img  className="absolute w-[18px] top-[30%] right-[15px]" src={globalIcons.downArrow} alt="search icon" />
          </div>
      </div>
   );
}


