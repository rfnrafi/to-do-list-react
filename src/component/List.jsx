import React from "react";
import styled from "styled-components";

const SingleList = styled.div`
  margin: 10px auto;
  background-color: #b3b2b2;
  border-radius: 2px;
  display: grid;
  padding: 10px;
  width: 300px;
  grid-template-columns: 250px 20px;
  justify-content: space-evenly;
  align-items: center;

  p {
    padding: 5px;
    border: 1px solid black;
  }

  .list-button {
    border: 1px solid black;
    text-align: center;
    user-select: none;
    cursor: pointer;
  }
`;

function List({ desc, remove }) {
  //
  console.log("LIST RENDERED");
  //

  return (
    <SingleList>
      <p>{desc}</p>
      <div
        className="list-button"
        onClick={() => {
          remove();
        }}
      >
        X
      </div>
    </SingleList>
  );
}

export default List;
