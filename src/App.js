import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CanvasContainer from "./CanvasContainer";
import ComponentsList from "./ComponentsList";

// import { Container } from "./Container";

export default function App() {
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <CanvasContainer />
        <ComponentsList />

        {/* <Container /> */}
      </DndProvider>
    </div>
  );
}
