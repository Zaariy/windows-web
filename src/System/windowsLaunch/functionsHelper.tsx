import type {windowAppType} from "../../Services/windowUiStructure/index";
// import Actions from 
import {
    setScreenSize,
    setBackgroundImage,
    pushNewWindowApp,
    clean,
    cleanDesktop
} from "../../Services/windowUiStructure";



export  const setSizeofRootWindow =  (dispatch ,width?: number,  height?: number ) => {
  if(width && height) {
      dispatch(setScreenSize({width : width , height : height}))
    }else{
      dispatch(setScreenSize({width : window.innerWidth , height : window.innerHeight})); // for first render
      window.addEventListener("resize" , () => {
          dispatch(setScreenSize({width : window.innerWidth , height : window.innerHeight}));
      })
          
    }
}

export const openApp =  (dispatch ,data: windowAppType) => {
  dispatch(pushNewWindowApp(data));
}
