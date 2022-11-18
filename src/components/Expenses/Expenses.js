import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const yearSelectHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearSelect={yearSelectHandler} />
      <ExpensesChart expenses={props.items} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
