import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";

// STYLING
//
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Btn = styled.div`
  width: 300px;
  background-color: #e94836;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Pop = styled.div`
  background-color: salmon;
  margin-bottom: 5px;
  transition: all 0.3s;
  transform: ${({ open }) =>
    open
      ? "translateY(0) rotate(0) scale(1)"
      : "translateY(150%) rotate(180deg) scale(0)"};

  display: grid;
  grid-template-columns: 8fr 2fr;
  justify-content: space-space-between;
  align-items: center;

  padding: 5px;

  input,
  button {
    background-color: inherit;
    border: 1px solid black;
  }
  input {
    overflow-y: auto;
  }
  button {
    cursor: pointer;
  }
`;

//
// STYLING END
function Button({ addItem }) {
  const [open, setOpen] = useState(false);
  const userInput = useRef(null);

  //
  console.log("BUTTON RENDERED");
  //
  return (
    <Wrapper>
      <Pop open={open}>
        <input ref={userInput}></input>
        <button
          onClick={() => {
            addItem({
              id: new Date().getTime(),
              desc: userInput.current.value,
            });
            userInput.current.value = "";
          }}
        >
          ADD
        </button>
      </Pop>
      <Btn>
        <AddButton open={open} setOpen={setOpen} />
      </Btn>
    </Wrapper>
  );
}

export default Button;
