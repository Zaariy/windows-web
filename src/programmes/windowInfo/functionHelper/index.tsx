import type {T} from "../type";

export const fetchSystemData =  async (setFunction : (result : T) => void , cb: () => void) => {
    try {
        
        const response = await fetch("/api/computerInfo");
        const result = await response.json();
        setFunction(result);
        cb();
    }catch(error) {
        // active on development
        // console.log("field : " , error)
    }

}

