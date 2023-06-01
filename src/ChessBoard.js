import { useState } from "react";
import "./App.css";

export default function ChessBoard({ value }) {
  const [color, setColor] = useState(false);

  const handleOnClick = () => {
    setColor(!color);
  };

  return (
    <div
      className={color ? "card-item bgColor" : "card-item"}
      onClick={handleOnClick}
    >
      {value}
    </div>
  );
}
