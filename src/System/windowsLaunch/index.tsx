// redux imports
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../Services/store";

// import Actions from 
import {
    setScreenSize,
    setBackgroundImage,
    pushNewWindowApp,
    clean,
    pushDesktopApp,
    cleanDesktop
} from "../../Services/windowUiStructure";

import {createFolder , cleanFileSystemState  ,createFile, searchByName} from "../../Services/windowsFileSys/index";

import type { windowAppType } from "../../Services/windowUiStructure";
// window test
import { TaskBar } from "../../components/taskbar";
import { useEffect } from "react";
import {globalIcons} from "../../FileSystem/windowIcons/index";
// import All window App | programmes
import {systemInformation} from "../../programmes/windowInfo/index" ;
import {taskmanger} from "../../programmes/taskmanger/index" ;
import { textEditor } from "../../programmes/texteditor";
import {fileExplorer}  from "../../programmes/fileExplorer/index";


// import img background Testing
const   BACKGROUNDIMAGE =  require("../../FileSystem/background/background.jpg");

export  const RootWindow =  () => {

    // Bring Data From Redux Store
    const oneGlobalState = useSelector((state:RootState) => {
        return {
            windowSize : state.windowSettings.screenSize ,
            backgroundImage : state.windowSettings.backgroundImage,
            runningApps : state.windowSettings.runningApps ,
            desktopApps : state.windowSettings.desktopApps,
        }
    })
    // for testing
    const FileSystemGlobalState = useSelector((state:RootState) => {
        return {
            rootFolder : state.fileSysSlice.rootFolder 
        }
    })
 

    // Dispatch Action
    const dispatch =  useDispatch()

    useEffect(() => {
        // set Screen Size of the root component
        // set the Background windows
        dispatch(setBackgroundImage({image : BACKGROUNDIMAGE})) 
        // 
        setSizeofRootWindow() ; // auto
        
        
    } , []) ;
    
    // re-render for every new window app added
    useEffect(() => {
        
        // Add windowInformation app to Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.systemInformationIcon , appName:"system" , data : systemInformation }))
        // add Task Manager App To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.taskMangerIcon , appName:"Task manager" , data : taskmanger }))
        // add Text Editor App To Desktop
        dispatch(pushDesktopApp({appIcon : globalIcons.textEditorIcon , appName:"Text Editor" , data : textEditor }))
        // add fileExplorer App To Desktop 
        dispatch(pushDesktopApp({appIcon : globalIcons.fileExplorerIcon, appName:"File Explorer" , data: fileExplorer }))

        
        // start create Main or Root folders
        
        dispatch(createFolder({folderName:"Desktop"}));
        dispatch(createFolder({folderName:"Downloads"}));
        dispatch(createFolder({folderName:"Music"}));
        dispatch(createFolder({folderName:"Photos"}));
        dispatch(createFile({folderName:"file.txt"}));

        return () => {
            dispatch(cleanFileSystemState()) ;
            dispatch(clean()) ;
            dispatch(cleanDesktop()) ;
        }
    } , [])
    useEffect(() => {dispatch(searchByName())} ,[]) 
    
    console.log(FileSystemGlobalState.rootFolder); 
    const setSizeofRootWindow =  (width?: number,  height?: number ) => {
        if(width && height) {
            dispatch(setScreenSize({width : width , height : height}))
            
        }else{

            dispatch(setScreenSize({width : window.innerWidth , height : window.innerHeight})); // for first render
            window.addEventListener("resize" , () => {
                dispatch(setScreenSize({width : window.innerWidth , height : window.innerHeight}));
            })
            
        }
    }

    const openApp =  (data: windowAppType) => {
        dispatch(pushNewWindowApp(data))
    }

    return (
        <div  className="relative h-full w-full overflow-hidden" style={{width: oneGlobalState.windowSize.width , height: oneGlobalState.windowSize.height}}>
            <img src={oneGlobalState.backgroundImage} alt="background" className="w-full h-full z-0"></img>
        <div  className="z-5 absolute top-0 ">
            <div className="flex flex-col">
           {oneGlobalState.desktopApps.map((desktop) => {
                return <div className="flex my-[5px] flex-col items-center" key={desktop.data.id}>
                    <img onClick={() => openApp(desktop.data)} className="w-[50px] hover:cursor-pointer" src={desktop.appIcon} alt="desktop images" ></img>
                    <p className="text-white ">{desktop.appName}</p>
                </div>;
            })}
            </div>
            <div>
            {oneGlobalState.runningApps.map((windowsApp) => {
                return <div key={windowsApp.id}>
                    {windowsApp.component}
                </div>;
            })}
        </div>
        </div>
        <TaskBar />
        </div>
        )
}
