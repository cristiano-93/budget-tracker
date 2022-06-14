import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";

const kExpenseItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100px;
  color: green;
`;
const kExpenseItemDiv = styled.div`
  color: blue;
  background-color: red;
  width: 60%;
  height: 100px;
  margin: 20px;
`;
const kTest = styled.div`
height: 100px;
color: red;
background-color: green;
width: 100px;
padding: 20px;
`

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span class="badge badge-primary badge-pill mr-3">£{props.cost}</span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
