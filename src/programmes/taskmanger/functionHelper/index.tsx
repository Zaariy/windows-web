import type {T} from "../type"

export const removeCharacter = (value: string | undefined) : number => {
    if(!value){
        return 0
    }
    const cloneValue =  value.slice(0 , value.indexOf("%"))
    return Number(cloneValue)
} 

export const removeFirstSixtyNumbers = (arr:number[]) : number[]  => {
    //
    const clone  =  arr.slice(59)
    return clone
}

export const fetchSystemData =  async (setFunction : (result : T) => void ) => {
    
    try {
        
        const response = await fetch("/api/track");
        const result = await response.json();
        setFunction(result);
        

    }catch(error) {
        console.log("field : " , error) // devalompent stage
    }

    }