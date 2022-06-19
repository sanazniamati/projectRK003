import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect, Text } from "react-konva";

const App = () => {
  const textRef = React.useRef();
  const [size, setSize] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    setSize({
      width: textRef.current.width(),
      height: textRef.current.height(),
    });
  }, []);
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={60}
          stroke={"#555"}
          stroke-width={5}
          fill={"#ddd"}
          width={size.width}
          height={size.height}
          shadowBlur={10}
          shadowColor={"black"}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.2}
          cornerRadius={10}
        />
        <Text
          id={"simple-text"}
          // x={Stage.innerWidth / 2}
          x={size.width / 2}
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
          text={`So many companies make casual promises about AI, it’s hard to know what’s real and what’s not. While competitors were perfecting their press releases, Juniper was first with client-to-cloud AIOps, first with an AI-driven Virtual Network Assistant, and first in industry recognition.

With real AI, your network becomes easier to operate. You can quickly configure, troubleshoot, and protect your network while minimizing errors. And when you can fix problems before they impact users, you’re delivering a next-level experience.

And Juniper’s solutions, driven by Mist AI, translate into real cost savings — up to 78% on your investmen`}
          fontSize={18}
          fontFamily="Calibri"
          fill={"#555"}
          width={300}
          padding={20}
          align="center"
          ref={textRef}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
