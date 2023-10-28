import DroppableComponent from "./DroppableComponent";
import { ItemTypes } from "./constants/ItemTypes";

export default function TextField() {
  return (
    <DroppableComponent itemType={ItemTypes.TextField}>
      <input type="text" placeholder="drag me" />
    </DroppableComponent>
  );
}
