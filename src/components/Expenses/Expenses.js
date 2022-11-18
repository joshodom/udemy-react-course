import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const yearSelectHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
    console.log("year changed to " + yearSelected);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearSelect={yearSelectHandler} />
      {props.items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
