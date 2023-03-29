import { data } from ".";
import { useState } from "react";

const typesHero = ["good", "normal"];

export const Block = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState(data);

  const handleUpdateList = (id, status) => {
    let card = listItems.find((item) => item.id === id);
    if (card && card.status !== status) {
      card.status = status;
      setListItems((prev) => [card, ...prev.filter((item) => item.id !== id)]);
    }
  };

  //////////////////////////////////////

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData("text");
    handleUpdateList(id, status);
    setIsDragging(false);
  };

  ////////////////////////

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text", `${id}`);
    setIsDragging(true);
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <div className="grid">
      {typesHero.map((container) => {
        return (
          <div
            className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
          >
            <p>{container}</p>

            {listItems.map((item) => {
              return (
                container === item.status && (
                  <div
                    // className="card-container"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onDragEnd={handleDragEnd}
                  >
                    <p>{item.content}</p>
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Block;
