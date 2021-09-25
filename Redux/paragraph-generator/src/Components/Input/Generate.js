import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeType, fetchApi } from "../../Redux/Slice/textSlice";

function Generate() {
  const [number, setNumber] = useState(1);
  const [format, setFormat] = useState();
  const dispatch = useDispatch();

  dispatch(fetchApi({ number, format }));

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const handleFormat = (e) => {
    e.preventDefault();
    setFormat(e.target.value);
    dispatch(changeType(format));
  };

  return (
    <div>
      <input
        value={number}
        onChange={(e) => handleChange(e)}
        className="m-5"
        type="number"
        min="1"
      />
      <select onChange={(e) => handleFormat(e)}>
        <option>text</option>
        <option>html</option>
      </select>
    </div>
  );
}

export default Generate;