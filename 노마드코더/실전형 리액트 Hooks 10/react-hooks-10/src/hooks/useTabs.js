import { useState } from "react";
import "../App.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (initalTab, allTabs) =>{
const [currentIndex, setCurrentIndex] = useState(initalTab);
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return{
    currentItem : allTabs[currentIndex],
    changeItem : setCurrentIndex
  }
}

const useTabsApp = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, Index) => (
        <button key={Index} onClick={()=>changeItem(Index)}>{section.tab}</button>
      ) )}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default useTabsApp;