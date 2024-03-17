import { useEffect , useState , useRef  } from "react";

// import redux tools
import { useDispatch, useSelector  } from "react-redux";
import { RootState } from "../../Services/store";

// import helper functions
import {removeWindowApp} from "../../Services/windowUiStructure" ;
import {dargAndDrop} from "./functionHelper/drag&dropWindow" ;

// import types
import {windowType} from "./type"
import  type {screenSizeType} from  "../../Services/windowUiStructure" ;
//

// System icons path : ../FileSystem/windowIcons/index
import {globalIcons} from "../../FileSystem/windowIcons/index"

export const Window =  (props : windowType) => {
    const { id,windowName , width , height , children } = props ;
    
    // windScreenSize : App Screen size it can change from app screen size to full screen size by using  fullScreenSize() function .
    const [windowScreenSize , setWindowScreenSize] = useState<screenSizeType>({width : width , height : height}) ;

    // windowRef : we use it for drag and drop window on Desktop
    const windowRef   =  useRef(null) ;
    const windowHeaderReference = useRef(null) ;

    const dispatch = useDispatch();
    // Bring ScreenSize data from Redux 
    // screeSize : Desktop Screen Size
    const screenSize =  useSelector((state : RootState) => state.windowSettings.screenSize)

    useEffect(() => {
        // this function is responsible  about drag and drop window on Desktop 
        // *** Must Fix a type
        dargAndDrop(windowRef.current , windowHeaderReference.current ) ;
        
    } ,[])

    const fullScreenSize = () => {
        if(screenSize.width === windowScreenSize.width) {

            setWindowScreenSize({width : width , height : height}) 
            return
        }
        setWindowScreenSize({width : screenSize.width , height : screenSize.height}) 
    }
    
    const removeWindow = () => {
    /*
        This function is responsible for removing Window program from 
        Desktop component by using ID 
    */
        dispatch(removeWindowApp({id : id})); 
    }


    return(
    <div  className="bg-white text-black  absolute"  style={{width: windowScreenSize.width , height : windowScreenSize.height - 50}} ref={windowRef}   >
        <header className="bg-blue-200 w-full h-[40px] flex  justify-between align-center  " ref={windowHeaderReference} >
            <p className="px-[5px] py-[5px]">{windowName}</p>
            <div className=" flex h-full items-center">
                <button className="px-[10px] py-[5px]"><img className="w-[19px] h-full" src={globalIcons.subIcon} alt="sub icon" ></img></button>
                <button onClick={fullScreenSize} className="px-[10px] py-[5px]"> <img className="w-[19px]" src={globalIcons.squareIcon} alt="square icon" ></img></button>
                <button onClick={removeWindow} className="px-[10px] py-[5px] h-full hover:bg-red-700">X</button>
            </div>
        </header>
        <div className='w-full h-full'>
            {children} 
        </div>
    </div>)
}