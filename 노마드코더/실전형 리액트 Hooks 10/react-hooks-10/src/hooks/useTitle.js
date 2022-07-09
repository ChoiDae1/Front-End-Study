import { useEffect, useState } from "react";
import "../App.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitleApp = () => {
  const titleupdater = useTitle("Loading....");
  setTimeout(() => titleupdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default UseTitleApp;