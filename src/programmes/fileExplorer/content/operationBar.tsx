import {useState} from "react";
import {globalIcons} from "../../../FileSystem/windowIcons/index";
import {goForwardToTheNextNode , goBackToThePreviosNode}  from "../../../Services/windowsFileSys/index";
import {useDispatch} from "react-redux";
import {CreateFileOrFolderComponent} from "../../../components/createFile/index"

export function OperationBar(props) {
   const {openedFolder , pathTracking} = props.fetchFiles; 
   const  [isOpened   , setOpened] =  useState({createFile : false , createFolder: false});
   const dispatch =  useDispatch()

    const open =  (t:string) => {
        if(t === "file"){
          setOpened((previos) => {
              return {...previos , createFile : true , createFolder: false};
          })
        }else{
          setOpened((previos) => {
              return {...previos , createFile : false , createFolder: true};
          })
        }

    }

    const switchComponent = () => {
      if(isOpened.createFile){
        return <CreateFileOrFolderComponent type="file" close={setOpened} />
      }
      if(isOpened.createFolder){
        return <CreateFileOrFolderComponent type="folder" close={setOpened} />
      }
    }
   return (
      <div>
        <ul className="flex font-normal  ml-4 mt-4 cursor-pointer">
          {switchComponent()}
          <li className="flex bg-[#3b3b3b] p-2 rounded-md mr-2" onClick={() => open("file") }>
            <img src={globalIcons.newFileIcon} alt="create New file" />
               New File
            </li>
          <li className="flex bg-[#3b3b3b] p-2 rounded-md mr-2" onClick={() => open("folder") }>
            <img className="pr-2" src={globalIcons.newFolderIcon} alt="create New folder" />
              New Folder
          </li>
        </ul>
      <div className="flex w-full justify-between items-center mt-5">
        <div className="flex flex-2 w-[30%] items-center ">
          <img className="cursor-pointer mx-6 h-[25px]" src={globalIcons.leftArrow} alt="left arrow" onClick={() => dispatch(goBackToThePreviosNode())}  />
          <img className="cursor-pointer mx-6 h-[25px]" src={globalIcons.rightArrow} alt="right arrow" onClick={() => dispatch(goForwardToTheNextNode())} />
          <img className="cursor-pointer mx-6 h-[25px]" src={globalIcons.reloadIcon} alt="reload icon" />
        </div>
         <div className="search-file px-2 relative flex-1 w-[70%] ">
            <p className="h-9 text-white outline-none rounded-md pl-2 flex items-center bg-[#3b3b3b] w-full" >{pathTracking == "" ? "/" : pathTracking}</p>
            <img  className="absolute w-[18px] top-[30%] right-[15px]" src={globalIcons.downArrow} alt="search icon" />
          </div>
      </div>
      </div>
   );
}


