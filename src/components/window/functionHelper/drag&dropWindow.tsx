// <<***>> Must Fix A type 
export const dargAndDrop = (windowRef : any, windowHeaderReference  : any) : void =>{
    
    const windowTarget  =  windowHeaderReference;
    var offsetX : number , offsetY : number;
    var draggable = windowTarget  ;
    // var zIndex = 1 ;


    draggable?.addEventListener('mousedown', function(event : MouseEvent) {
        offsetX = event.clientX - draggable.getBoundingClientRect().left;
        offsetY = event.clientY - draggable.getBoundingClientRect().top;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', release);
    });

    function drag(event : any) {
        var x = event.clientX - offsetX;
        var y = event.clientY - offsetY;

        // Place the draggable div at specific coordinates (e.g., 200px, 200px)
        windowRef.style.left = x + 'px' ;
        windowRef.style.top = y + 'px';
        
    }
    
    
    function release() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', release);
    }
}

