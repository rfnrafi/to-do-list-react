import React from "react";
import styled from "styled-components";

const Add = styled.div`
  display: inline-block;
  cursor: pointer;
`;
function AddButton({ open, setOpen }) {
  //
  console.log("ADDBTN RENDERED");
  //
  return <Add onClick={() => setOpen(!open)}>+</Add>;
}

export default AddButton;
