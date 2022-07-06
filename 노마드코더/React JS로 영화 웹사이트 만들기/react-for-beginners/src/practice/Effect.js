import { useEffect, useState } from "react";

function Effect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {console.log("I run only once");}, [])
  useEffect(() => {console.log("I run when 'keyword' changes.");}, [keyword])
  useEffect(() => {console.log("I run when 'counter' changed")}, [counter])
  useEffect(() => {console.log("I run when 'counter' & 'keyword' changed")}, [counter, keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Effect;
