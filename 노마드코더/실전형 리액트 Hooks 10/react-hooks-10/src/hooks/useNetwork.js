import {useState, useEffect} from "react";
import "../App.css";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handlechange = () => {
        if (typeof onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(()=>{
        window.addEventListener("online", handlechange);
        window.addEventListener("offline", handlechange);
        return () =>{
            window.removeEventListener("online", handlechange);
            window.removeEventListener("offline", handlechange);
        }
    }, [])
    return status;

}
const UseNetworkApp = () => {
  const ChangeFn = (online) =>{
     console.log(online? "I went to online": "I went to offline");
  }
  const onLine = useNetwork(ChangeFn); 
  return (
    <div className="App">
      <h1>{onLine? "online":"offline"}</h1>
    </div>
  );
};

export default UseNetworkApp;