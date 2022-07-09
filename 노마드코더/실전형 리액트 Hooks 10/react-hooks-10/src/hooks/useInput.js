import { useState } from "react";
import "../App.css";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      let willupdate = true;
      if (typeof validator === "function") {
        willupdate = validator(value);
      }
      if (willupdate) {
        setValue(event.target.value);
      }
    };
    return { value, onChange };
  };

  const useInputApp = () => {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
    );
  };

  export default useInputApp;