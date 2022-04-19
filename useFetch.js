import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null})
    
    useEffect(() => {
        return () => {
          isMounted.current = false;
        }
    }, [])

    useEffect( () => {

        setState({...state,loading:true})
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            setTimeout( ()=>{
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }, 1200);
        })
    },[url])

    return state;
}
