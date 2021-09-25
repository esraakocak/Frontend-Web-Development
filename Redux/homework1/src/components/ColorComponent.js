import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../redux/notes/notesSlice";

export default function ColorComponent() {
  const dispatch = useDispatch();
  const colorValue = useSelector((state) => state.notes.color);

  return (
    <div>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue={colorValue}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "1em",
          width: "8em",
        }}
        onChange={(e) => dispatch(setColor(e.target.value))}
      />
    </div>
  );
}