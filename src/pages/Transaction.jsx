import React, { useState } from "react";
import "./sass/Transaction.scss";

const Transaction = () => {
  const [transaction] = useState([
    {
      id: 1,
      name: "Alisher",
      type: "deposit",
      amount: 50.0,
      currency: "USDT",
      status: "completed",
      date: "2024-02-10T12:30:00Z",
    },
    {
      id: 2,
      name: "Javohir",
      type: "withdrawal",
      amount: 20.5,
      currency: "USDT",
      status: "pending",
      date: "2024-02-09T15:45:00Z",
    },
    {
      id: 3,
      name: "Shoxobiddin",
      type: "deposit",
      amount: 100.0,
      currency: "USDT",
      status: "failed",
      date: "2024-02-08T09:20:00Z",
    },
  ]);
  return (
    <section>
      <div className="container">
        <div className="section-1">
          <h1>Transaction Page</h1>
        </div>
        <div className="transaction-cards">
          <div className="transaction-card">
            {/* <ul>
              {transaction.map((e) => (
                <li key={e.id}>
                  <p>{e.type.toUpperCase()}</p> - {e.amount}
                  {e.currency} <span>({e.status})</span>
                </li>
              ))}
            </ul> */}
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
