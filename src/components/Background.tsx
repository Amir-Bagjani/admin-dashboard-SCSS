import { CSSProperties } from "react";

const style: CSSProperties = {
  position: "absolute",
  zIndex: "-1",
  top: "0",
  left: "0",
  width: `100%`,
  height: 250,
  backgroundColor: `var(--main-color)`,
};

const Background = () => {
  return <div style={style}></div>;
};

export default Background;
