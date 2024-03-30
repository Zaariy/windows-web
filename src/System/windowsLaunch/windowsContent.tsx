import {useSelector , useDispatch} from "react-redux";
import {RootState} from "../../Services/store";
import { TaskBar } from "../../components/taskbar";
import {openApp} from "./functionsHelper";

export const WindowsRootContent = () => {

  // Bring Data From Redux Store
  const oneGlobalState = useSelector((state:RootState) => {
      return {
          windowSize : state.windowSettings.screenSize ,
          backgroundImage : state.windowSettings.backgroundImage,
          runningApps : state.windowSettings.runningApps ,
          desktopApps : state.windowSettings.desktopApps,
      }
  })
  const dispatch  = useDispatch(); 

  return (
        <div  className="relative h-full w-full overflow-hidden" style={{width: oneGlobalState.windowSize.width , height: oneGlobalState.windowSize.height}}>
            <img src={oneGlobalState.backgroundImage} alt="background" className="w-full h-full z-0"></img>
        <div  className="z-5 absolute top-0 ">
            <div className="flex flex-col">
           {oneGlobalState.desktopApps.map((desktop) => {
                return <div className="flex my-[5px] flex-col items-center" key={desktop.data.id}>
                    <img onClick={() => openApp(dispatch,desktop.data)} className="w-[50px] hover:cursor-pointer" src={desktop.appIcon} alt="desktop images" ></img>
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

