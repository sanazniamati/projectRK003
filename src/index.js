import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect, Text } from "react-konva";

const App = () => {
  return (
    <Stage width={340} height={300}>
      <Layer>
        <Text
          id={"simple-text"}
          x={Stage.innerWidth / 2}
          y={15}
          text={"Simple Text"}
          fontSize={30}
          fontFamily="Calibri"
          fill={"green"}
          // offsetX={}
        />
        <Text
          id={"complex-text"}
          x={20}
          y={60}
          text={
            "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances."
          }
          fontSize={18}
          fontFamily="Calibri"
          fill={"#555"}
          width={300}
          padding={20}
          align="center"
        />

        <Rect
          x={20}
          y={60}
          stroke={"#555"}
          stroke-width={5}
          fill={"#ddd"}
          width={300}
          // height={(complex-text).height}
          shadowBlur={10}
          shadowColor={"black"}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.2}
          cornerRadius={10}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
