import React from "react";
import Note from "./Note";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

export default function Notes() {
  const notes = useSelector((state) => state.notes.items);
  const searchInput = useSelector((state) => state.notes.searchInput);
  let shownNotes = [];
  const filteredNotes = [];

  notes.filter((note) => {
    if (note.text.toLowerCase().includes(searchInput) && searchInput) {
      filteredNotes.push(note);
    }
  });

  if (filteredNotes.length !== 0) {
    shownNotes = filteredNotes;
  } else {
    shownNotes = notes;
  }

  return (
    <div>
      <Row className="g-2">
        {shownNotes.map((note) => (
          <Col key={notes.indexOf(note)} md={3}>
            <Note note={note}></Note>
          </Col>
        ))}
      </Row>
    </div>
  );
}