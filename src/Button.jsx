import DroppableComponent from "./DroppableComponent";
import { ItemTypes } from "./constants/ItemTypes";

export default function Button() {
  return (
    <DroppableComponent itemType={ItemTypes.Button}>
      <button type="button">drag me</button>
    </DroppableComponent>
  );
}
