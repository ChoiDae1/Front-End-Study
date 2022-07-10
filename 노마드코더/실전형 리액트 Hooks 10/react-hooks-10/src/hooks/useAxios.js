import defaultAxios from "axios";
import {useState,  useEffect} from "react";
import "../App.css";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({loading: true, error: null, data: null});
    const [trigger, setTrigger] = useState(0);
    const refetch = () =>{
        setState({...state, loading:true});
        setTrigger(new Date());
    }
    useEffect(()=>{
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading:false,
                data
            });
        }).catch(error => {setState({...state, loading:false, error})})
    }, [trigger])
    if(!opts.url){
        return;
    }
    return {...state, refetch};
}
const UseAxiosApp = () => {
    const { loading, error, data, refetch} = useAxios({url: "https://yts.mx/api/v2/list_movies.json"})
    console.log(`Loding: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`)
    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};

export default UseAxiosApp;