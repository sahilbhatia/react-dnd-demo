import { Box } from "./Box";
import { Dustbin } from "./Dustbin";

export const Container = function Container() {
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin />
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
    </div>
  );
};
