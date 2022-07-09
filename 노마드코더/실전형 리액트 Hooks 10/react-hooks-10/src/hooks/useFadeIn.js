import { useEffect, useRef } from "react";
import "../App.css";

const useFadeIn = (duration, delay) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    })
    return { ref: element, style: {opacity: 0 }}
};

const UseFadeInApp = () => {
  const fadeInH1 = useFadeIn(5, 5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello! Bo-Min</h1>
    </div>
  );
};

export default UseFadeInApp;