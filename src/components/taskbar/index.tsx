import { DateAndTime } from "../../System/time/index";
import { globalIcons } from "../../FileSystem/windowIcons";
import {useSelector } from "react-redux";
import  {RootState} from "../../Services/store";
import type {desktopAppsType} from "../../Services/windowUiStructure/index";

type propsType = {
  id : string | number ,
  apps: desktopAppsType[]
}


function findAppById (id : string | number , apps : desktopAppsType[]) {
    const result = apps.filter((e) => id === e.data.id);
    return result[0] ;
}

function OpenedWindowsDisplay(props : propsType){
    const {id , apps} =  props ;
    // serch for the app by id  for get its Icon and its Name 
    const result = findAppById(id , apps);

    return ( result ? (
              <li className="w-[200px] flex items-center h-[40px] bg-[#8B93FF]  text-black font-bold rounded-md mx-[5px] px-[5px]">
                  <img  className="w-[25px]" src={result.appIcon} alt={result.appName} />
                  <p className="pl-[5px]">{result.appName}</p>
              </li>
            ) : null
    
        ); 
}

export function TaskBar () {

   const oneGloblState =  useSelector((state:RootState) => {
        return {
          openedWindows : state.windowSettings.runningApps,
          desktopApps : state.windowSettings.desktopApps
        } 
    })
    
    return (
    <div className="bg-white absolute bottom-0 w-full py-10px px-[5px] flex justify-between">
        <ul className="rightSide flex items-center ">
            <li className="h-[100%] flex items-center"><img className="w-[30px]" src={globalIcons.windowLogo} alt="window logo"></img></li>
            {oneGloblState.openedWindows.map((e) => <OpenedWindowsDisplay key={e.id} id={e.id} apps={oneGloblState.desktopApps}  />)}
            
        </ul>
        <ul className="leftSide">
            <li>
                <DateAndTime />
            </li>
        </ul>
    </div>
    )
}
