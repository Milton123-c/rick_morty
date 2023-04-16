import { useEffect, useState } from "react"
import axios from 'axios';

export const useFetch = (url) => {

    if(!url) return ;

    const [state, setState] = useState();
    const [endError, setendError] = useState(false)

    useEffect(()=>{
      
        axios.get(url)
        .then(res =>{ 
            setState(res.data);
            setendError(false);
          
        })
        .catch(err => {
            setendError(true)
          
        })
     

    }, [url]);

    return {state, endError};

}