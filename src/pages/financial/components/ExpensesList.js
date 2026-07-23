import React from "react";

export default function ExpensesList({ expenses }) {
  const data = expenses.map((expense) => (
    <tr key={expense.id}>
      <td className="ps-3">{expense.id}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>{expense.date}</td>
    </tr>
  ));
  if (data.length === 0) {
    return (
      <tr className="">
        <td colSpan="5" className="text-center">
          No expenses to display.
        </td>
      </tr>
    );
  }
  return <>{data}</>;
}
