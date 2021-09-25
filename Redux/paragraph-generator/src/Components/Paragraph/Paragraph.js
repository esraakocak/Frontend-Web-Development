import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { useParagraph } from "../../Redux/Slice/textSlice";

function Paragraph() {
  const texts = useSelector(useParagraph);
  return (
    <div>
      {texts.map((text) => (
        <p key={nanoid}>{text}</p>
      ))}
    </div>
  );
}

export default Paragraph;