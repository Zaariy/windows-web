import "./main.css" ;
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
    <div  className="bg-white text-black  absolute overflow-hidden rounded-xl "  style={{width: windowScreenSize.width , height : windowScreenSize.height - 50}} ref={windowRef}   >
        <header className="bg-[#05060a] w-full h-[40px] flex  justify-between align-center rounded-t-xl  " ref={windowHeaderReference} >
            <p className="px-[5px] text-white flex  items-center py-[5px]"><img className="h-[16px] mx-2" src={globalIcons.homeIcon} alt={'home'} /> {windowName}</p>
            <div className=" flex h-full items-center">
                  <button className="px-[10px] py-[5px]">
                    <div className="sub"></div> 
                  </button>
                  <button onClick={fullScreenSize} className="px-[10px] py-[5px]">
                    <div className="square"></div> 
                  </button>
                <button onClick={removeWindow} className="px-[10px] py-[5px] h-full hover:bg-red-700">
                  <div className="x-icon-div">
                    <span className="span-one" >
                    </span>
                    <span className="span-tow" >
                    </span>
                  </div>
                </button>
            </div>
        </header>
        <div className='w-full h-full'>
            {children} 
        </div>
    </div>)
}
