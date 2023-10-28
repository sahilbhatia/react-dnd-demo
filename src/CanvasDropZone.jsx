import { useDrop } from "react-dnd";

import { ItemTypes } from "./constants/ItemTypes";

export default function CanvasDropZone() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.TextField, ItemTypes.Button, "box"],
    drop: (item, monitor) => {
      console.log(
        "Inside CanvasDropZone -> drop -> Item: ",
        item,
        "; getItemType: ",
        monitor.getItemType(),
        "; getItem: ",
        monitor.getItem(),
        "; getInitialClientOffset: ",
        monitor.getInitialClientOffset(),
        "; getInitialSourceClientOffset: ",
        monitor.getInitialSourceClientOffset(),
        "; getClientOffset: ",
        monitor.getClientOffset(),
        "; getDifferenceFromInitialOffset: ",
        monitor.getDifferenceFromInitialOffset(),
        "; getSourceClientOffset: ",
        monitor.getSourceClientOffset()
        // getSourceClientOffset seems to be closest x, y
      );

      const sourceClientOffset = monitor.getSourceClientOffset();
      console.log("sourceClientOffset before setTimeout: ", sourceClientOffset);

      setTimeout(() => {
        console.log("sourceClientOffset inside setTimeout: ", sourceClientOffset);
        const canvasContainer = document.getElementsByClassName("canvas-container")[0];
        console.log("canvas container: ", canvasContainer);
        const elm = document.getElementById(item.id);
        console.log("matching elm: ", item.id, elm);
        const dupElm = elm.cloneNode(true);
        console.log("duplicate elm: ", dupElm);
        dupElm.removeAttribute("id");
        dupElm.style.position = "absolute";
        dupElm.style.left = `${sourceClientOffset.x}px`;
        dupElm.style.top = `${sourceClientOffset.y}px`;
        canvasContainer.appendChild(dupElm);
      }, 0);

      return { name: "DropZone" };
    },
    collect: (monitor, props) => {
      // console.log("Inside CanvasDropZone -> collect -> monitor: ", monitor, "; props: ", props);

      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      };
    }
  }));

  const isActive = canDrop && isOver;

  let backgroundColor = "#222";

  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div
      ref={drop}
      style={{ width: "100vw", height: "50vh", border: "1px solid black", backgroundColor }}
    >
      {isActive ? "Release to drop" : "Drag a component here"}
    </div>
  );
}
