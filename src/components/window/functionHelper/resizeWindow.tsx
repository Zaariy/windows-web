
var onClickPosition : number ;
var releasePosition : number ;

// Must Fix A type
export const  resizeWindow =  (element: any ) => {
    
    const windowApp =  element.current ;
    const widthSub =  windowApp.clientWidth - 20 ;
    const widthPlus =  windowApp.clientWidth + 20 ;
    
    
    windowApp.addEventListener("mousedown" , (e : MouseEvent) => { 
        if(e.offsetX > widthSub && e.offsetX < widthPlus ){
            onClickPosition =  e.x 
            console.log('working')
            //  window.style.mouseCursor =  "pointer"  ;
            windowApp.classList.add("cursor-ew-resize")
            // return 
            windowApp.addEventListener("mouseup" , () => {
                windowApp.classList.remove("cursor-ew-resize")
            }) ;
            // onClickPosition = 0
            // releasePosition = 0


        }
        document.addEventListener("mouseup" , () => {
            console.log("release")
            releasePosition = e.x ;
            windowApp.style.width =  windowApp.clientWidth + (releasePosition - onClickPosition) + "px" ;
            windowApp.style.height =  windowApp.clientHeight + (releasePosition - onClickPosition) + "px" ;
        })
        
       
        
        
    })

    
} 

/*
    const height =  windowApp.clientHeight ;
    
    
    console.log('re-render')
    eventB = windowApp.addEventListener("mousedown" , (e1 : MouseEvent) => {
            a =  document.addEventListener("mouseup" , (e : MouseEvent) => {
                 if(e1.offsetX > widthSub && e1.offsetX < widthPlus ){
                     console.log(e1)
                     releasePosition =  e1.x;
                     
                    }
                    document.removeEventListener("mouseup" , a) ;
            })
        }else{
            // window.removeEventListener("mouseover" ,eventA) ;
        }
    })
    

*/