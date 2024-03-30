// redux imports
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../Services/store";
import {useEffect} from "react";
// import Actions from 
import {
    setBackgroundImage,
    clean,
    cleanDesktop
} from "../../Services/windowUiStructure";
import {
  cleanFileSystemState,
  setRecentFolders
  } from "../../Services/windowsFileSys/index";
// window setup 
import {setUpFilesSystem} from "./setUpFilesSystem";
import {setUpDesktopApps} from "./setUpDesktopApps";
import {WindowsRootContent} from "./windowsContent";
// functions helper 
import {setSizeofRootWindow} from "./functionsHelper";

// import img background  
const   BACKGROUNDIMAGE =  require("../../FileSystem/background/background.jpg");
export  const RootWindow =  () => {
    // File system
    const FileSystemGlobalState = useSelector((state:RootState) => {
        return {
            rootFolder : state.fileSysSlice.rootFolder, 
        }
    })
    // Dispatch Action
    const dispatch =  useDispatch()
    useEffect(() => {
        // set Screen Size of the root component
        // set the Background windows
        dispatch(setBackgroundImage({image : BACKGROUNDIMAGE})) 
        // 
        setSizeofRootWindow(dispatch) ; // auto
    } , []) ;
    
    // re-render for every new window app added
    useEffect(() => {
        // Add Desktop Apps to Desktop by pushing to the components to redux 
        setUpDesktopApps(dispatch);         
        // start create Main or Root folders
        setUpFilesSystem(dispatch)
        return () => {
            dispatch(cleanFileSystemState()) ;
            dispatch(clean()) ;
            dispatch(cleanDesktop()) ;
        }
    } , [])

    useEffect(() => {
      // set the main folders or  recent folder  
        dispatch(setRecentFolders(FileSystemGlobalState.rootFolder));
    } , [FileSystemGlobalState.rootFolder])

    return  <WindowsRootContent /> ;
}
