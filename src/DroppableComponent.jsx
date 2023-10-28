import { useDrag } from "react-dnd";
import { nanoid } from "nanoid";

const componentId = nanoid();

export default function DroppableComponent({ itemType, children }) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: itemType,
    item: { name: itemType, id: `${itemType}-${componentId}` },
    end: (item, monitor) => {
      console.log(
        "Inside DroppableComponent -> end -> item: ",
        item,
        "; Did drop? ",
        monitor.didDrop(),
        "; Drop result: ",
        monitor.getDropResult()
      );

      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        console.log("DroppableComponent -> end -> item: ", item, dropResult);
      }
    },
    collect: monitor => {
      // console.log("Inside DroppableComponent -> collect -> monitor: ", monitor);

      return {
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId()
      };
    }
  }));

  return isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} id={`${itemType}-${componentId}`}>
      {children}
    </div>
  );
}
