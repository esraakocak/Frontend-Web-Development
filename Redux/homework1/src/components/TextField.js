import React from "react";
import { Form, Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addNote, setText } from "../redux/notes/notesSlice";
import ColorComponent from "./ColorComponent";

export default function TextField() {
  const colorValue = useSelector((state) => state.notes.color);
  const text = useSelector((state) => state.notes.text);
  const dispatch = useDispatch();
  const textChangeHandler = (e) => {
    dispatch(setText(e.target.value));
  };
  const addNoteHandler = () => {
    if (!text) {
      toast.warn('"note here" field must not be empty!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    dispatch(addNote({ text: text, color: colorValue }));
    dispatch(setText(""));
  };
  return (
    <div>
      <Form>
        <Form.Group
          style={{ border: "1px solid black", borderRadius: 5 }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            value={text}
            onChange={textChangeHandler}
            style={{ background: colorValue }}
            placeholder="note here"
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>

      <Nav className="justify-content-center">
        <Nav.Item>
          <ColorComponent></ColorComponent>
        </Nav.Item>
        <Nav.Item>
          <Button
            onClick={addNoteHandler}
            style={{ width: "8em", marginLeft: "1em" }}
            variant="primary"
          >
            Add note
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
}