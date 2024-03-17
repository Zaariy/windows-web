import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Types of state /// 
export type  windowAppType =  {
    id: number | string ,
    component : React.ReactNode ,
}

export type screenSizeType  = {
    width: number  , 
    height : number
}
export type removeAppType = {
    id : number | string
}

export interface desktopAppsType {
    appIcon : string ,
    appName : string
    data : windowAppType
}
export interface windowInterface {
    screenSize : screenSizeType  ,
    backgroundImage : string ,
    runningApps: windowAppType[]  ,
    desktopApps : desktopAppsType[] ,

}


const initialState : windowInterface = {
    screenSize : {width: 1280 , height : 720},
    backgroundImage : "" ,
    runningApps : [],
    desktopApps: [] ,
}



const  windowSettingsSlice =  createSlice({
    name : "initWindowSettings" ,
    initialState,
    reducers : {
        setScreenSize : (state,action : PayloadAction<screenSizeType>) => {
            state.screenSize =  {width : action.payload.width , height : action.payload.height}
        },
        setBackgroundImage : (state , action) => {
            state.backgroundImage = action.payload.image 
        },
        pushNewWindowApp : (state , action: PayloadAction<windowAppType> ) => {
             state.runningApps = [...state.runningApps , action.payload] ; 
             
        },
        removeWindowApp : (state, action: PayloadAction<removeAppType>) => {
            state.runningApps   =  state.runningApps.filter((window) => window.id !== action.payload.id) ;
        } ,
        clean:(state )  => {
           state.runningApps = [] ;
        }, 
        cleanDesktop:(state )  => {
           state.desktopApps = [] ;
        }, 
        pushDesktopApp : (state , action:PayloadAction<desktopAppsType> ) =>{
            /*
                {
                    appIcon : ..
                    appName : ..
                    component : < ?>
                }
            */
           state.desktopApps = [...state.desktopApps , action.payload]


        }
    } 
})

export const {
    setScreenSize,
    setBackgroundImage,
    pushNewWindowApp,
    removeWindowApp,
    clean,
    pushDesktopApp,
    cleanDesktop
    } =  windowSettingsSlice.actions ;
    
export default windowSettingsSlice.reducer ;