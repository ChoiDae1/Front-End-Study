import {useRef} from "react";
import "../App.css";

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () =>{
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof(callback) === "function"){
                callback(true);
            }
        }   
    }
    const exitFull = () => {
        const checkFullScreen = document.fullscreenElement;
       if (checkFullScreen !== null) {
           document.exitFullscreen();
           if(callback && typeof(callback) === "function"){
               callback(false);
            }
        }
    }
    return {element, triggerFull, exitFull}
}
const UseFullscreenApp = () => {
    const onFullS = (isFull) =>  {
        console.log(isFull ? "we are full" : "we are small")
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullS);
    return (
        <div className="App" style={{ height: "1000vh"}}>
            <div>
                <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg"/>
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
  );
};

export default UseFullscreenApp;