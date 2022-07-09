import { useEffect } from "react";
import "../App.css";

const useBeforeLeave = (onBefore) => {
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  
  if (typeof onBefore !== "function") {
    return;
  }
};

const UseBeforeLeaveApp = () => {
  const beforeFn = () => console.log("Please don't leave");
  useBeforeLeave(beforeFn);
  return (
    <div className="App">
      <h1>Hello!!</h1>
    </div>
  );
};

export default UseBeforeLeaveApp;
