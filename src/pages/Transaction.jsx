import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./sass/Transaction.scss"; // Stil uchun

const TransactionPage = () => {
  const [debts, setDebts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // **DebtsPage dan ma'lumotlarni olish**
  useEffect(() => {
    const savedDebts = JSON.parse(localStorage.getItem("debts")) || [];
    setDebts(savedDebts);

    const savedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
  }, []);

  // **Tranzaksiyalarni saqlash**
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // **Yangi tranzaksiya qo'shish**
  const addTransaction = (id, name, amount) => {
    const newTransaction = {
      id,
      name,
      amount,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="transaction-container">
      <h2 className="text-center mb-4">Transaction Page</h2>

      {/* Foydalanuvchilar ro‘yxati */}
      <div className="users-list">
        {debts.map((debt) => (
          <Card key={debt.id} className="user-card">
            <Card.Body>
              <h5>{debt.name}</h5>
              <p>
                Qarz: <strong>{debt.debt}$</strong>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => addTransaction(debt.id, debt.name, 10)}
              >
                +10$ Qo'shish
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Tranzaksiyalar */}
      <h3 className="mt-4">Tranzaksiyalar</h3>
      <div className="transactions-list">
        {transactions.map((tx, index) => (
          <Card key={index} className="transaction-card">
            <Card.Body>
              <h5>{tx.name}</h5>
              <p>
                <strong>{tx.amount}$</strong> qo'shildi
              </p>
              <small>{tx.date}</small>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TransactionPage;
