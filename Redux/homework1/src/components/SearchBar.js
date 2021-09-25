import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../redux/notes/notesSlice";

export default function SearchBar() {
  const [opacity, setOpacity] = useState("60%");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(setSearchInput(e.target.value));
  };
  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <InputGroup className="mb-3">
        <FormControl
          onChange={changeHandler}
          style={{ opacity: opacity, border: "1px solid gray" }}
          placeholder="search a note"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onFocus={() => setOpacity("100%")}
          onBlur={() => setOpacity("60%")}
        />
      </InputGroup>
    </div>
  );
}