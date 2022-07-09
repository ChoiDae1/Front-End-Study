import { useEffect, useRef } from "react";
import "../App.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const useClickApp = () => {
  const sayhello = () => console.log("say hello");
  const title = useClick(sayhello);
  return (
    <div className="App">
      <div ref={title}>Hi</div>
    </div>
  );
};

export default useClickApp

