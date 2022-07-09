import "../App.css";

const usePreventLeave = () => {
    const listener = (event) =>{
      event.preventDefault();
      event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    
    return {enablePrevent, disablePrevent};
  };
  
  const usePreventLeaveApp = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
      <div className="App">
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>unProtect</button>
      </div>
    );
  };

  export default usePreventLeave;