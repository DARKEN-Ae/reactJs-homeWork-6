import React, { useState } from "react";
import "./sass/Transaction.scss";

const TransactionPage = () => {
  const storedDebts = JSON.parse(localStorage.getItem("debts"));
  const [debts] = useState(storedDebts);

  return (
    <div className="container">
      <div className="transaction-page">
        <h2>Transactions</h2>
        {debts.length === 0 ? (
          <p>Hozircha hech qanday qarz yo'q.</p>
        ) : (
          <ul>
            {debts.map((debt) => (
              <li key={debt.id}>
                <b>{debt.name}</b> - {debt.debt} USDT (📞 {debt.phone})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;
