import { ContainerCards } from "./ContainerCards";
import { data } from ".";
import { useState } from "react";
// import { Status } from "../interfaces"

const typesHero = ["good", "normal", "bad"];

export const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState(data);
  
  console.log(isDragging)
  const handleDragging = (dragging) => setIsDragging(dragging);

  const handleUpdateList = (id, status) => {
    let card = listItems.find((item) => item.id === id);


    if (card && card.status !== status) {
      card.status = status;
      
      setListItems((prev) => [card, ...prev.filter((item) => item.id !== id)]);
    }
  };
 
  return (
    <div className="grid">
      {typesHero.map((container) => {
        // console.log(container)
        return (
        <ContainerCards
          items={listItems}
          status={container}
          key={container}
          
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      )})}
    </div>
  );
};
