import {useState , useEffect} from "react" ;


type timeType = {
    hour : number ,
    minute : number ,
}


export const DateAndTime  =  ()  => {
    const date =  new Date();
    const [time , setTime] =  useState<timeType>() 
    const  formatDate : string =    date.getMonth()+"/"+date.getDate()+ "/"+ date.getFullYear() 
    // const  formatTime : string =  data. + "."

    useEffect(() => {
        if(!time){

            setTime({hour : date.getHours() , minute: date.getMinutes() })
            return
        }
        const e = setInterval( () => {
            setTime({hour : date.getHours() , minute: date.getMinutes() })
        } , 1000 * 60)
       
        return () => {
            clearInterval(e) ;
        }
        
    } , [])
    
    return (
        <div>
            <p className="time text-black">{time?.hour}:{time?.minute} PM</p>
            <p className="date text-black">{formatDate}</p>

        </div>
     )
}