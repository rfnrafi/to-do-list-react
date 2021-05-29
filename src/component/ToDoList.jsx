import styled from "styled-components";
import List from "./List";
import { Fragment, useReducer } from "react";
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
  const initialState = {
    list: [
      { id: 0, desc: "TEST" },
      { id: 1, desc: "PROCESS" },
    ],
    massage: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, list: [...state.list, action.addObj] };
        break;

      case "REMOVE":
        return {
          ...state,
          list: [...state.list.filter((item) => item.id != action.id)],
        };
        break;

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.list);
  return (
    <>
      <Wrapper>
        {state.list.map((item) => {
          return (
            <List
              key={item.id}
              desc={item.desc}
              remove={() => dispatch({ type: "REMOVE", id: item.id })}
            />
          );
        })}
      </Wrapper>
      <Button addItem={(addObj) => dispatch({ type: "ADD", addObj })} />
    </>
  );
};

export default ToDoList;
