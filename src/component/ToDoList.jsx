import styled from "styled-components";
import List from "./List";
import { Fragment } from "react";
import Button from "./Button";
const Wrapper = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: silver;
  margin-bottom: 70px;
`;

const ToDoList = () => {
  return (
    <>
      <Wrapper>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
      </Wrapper>
      <Button />
    </>
  );
};

export default ToDoList;
