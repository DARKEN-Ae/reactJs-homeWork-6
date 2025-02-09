import React, { useState } from "react";
import OneCard from "../components/card/Card";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 } from "uuid";
import "./sass/Debts.scss";

const getStoredDebts = () => {
  const storedDebts = localStorage.getItem("debts");
  return storedDebts ? JSON.parse(storedDebts) : [];
};

const DebtsPage = () => {
  const [debts, setDebts] = useState(
    getStoredDebts().length
      ? getStoredDebts()
      : [
          { id: 0, name: "Javohir", debt: "0.001", phone: "+998999999999" },
          { id: 1, name: "Alisher", debt: "1", phone: "+998977777777" },
          { id: 2, name: "Shoxobiddin", debt: "50", phone: "+998901234567" },
          { id: 3, name: "Ziyodulla", debt: "2.75", phone: "+998994445566" },
          { id: 4, name: "Madina", debt: "0.5", phone: "+998909998877" },
          { id: 5, name: "Diyor", debt: "10", phone: "+998935550011" },
          { id: 6, name: "Jasmina", debt: "3.2", phone: "+998907654321" },
          { id: 7, name: "Sardor", debt: "8", phone: "+998933332211" },
          { id: 8, name: "Gulnoza", debt: "0.05", phone: "+998901112233" },
          { id: 9, name: "Kamoliddin", debt: "15.7", phone: "+998944448888" },
        ]
  );

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [debt, setDebt] = useState({ name: "", debt: "", phone: "" });
  const [selected, setSelected] = useState(null);

  const handleShow = () => {
    setValidated(false);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const saveDebtsToStorage = (newDebts) => {
    localStorage.setItem("debts", JSON.stringify(newDebts));
  };

  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      let newDebts;
      if (selected === null) {
        newDebts = [...debts, { ...debt, id: v4() }];
      } else {
        newDebts = debts.map((el) => (el.id === selected ? debt : el));
      }
      setDebts(newDebts);
      saveDebtsToStorage(newDebts);
      handleClose();
    }
    setValidated(true);
  };

  const handleDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  const editDebt = (id) => {
    handleShow();
    setSelected(id);
    setDebt(debts.find((el) => el.id === id));
  };

  const openModalDebt = () => {
    handleShow();
    setSelected(null);
    setDebt({ name: "", debt: "", phone: "" });
  };

  const deleteDebt = (id) => {
    const updatedDebts = debts.filter((debt) => debt.id !== id);
    setDebts(updatedDebts);
    localStorage.setItem("debts", JSON.stringify(updatedDebts));
  };

  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2 className="text-center">All Debts</h2>
          <Button variant="primary" onClick={openModalDebt}>
            <b>Add debt</b>
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  onChange={handleDebt}
                  value={debt.name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="debt">
                <Form.Label>Debt</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Debt"
                  required
                  onChange={handleDebt}
                  value={debt.debt}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  required
                  onChange={handleDebt}
                  value={debt.phone}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill!
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                {selected === null ? "Add" : "Save"} debt
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        {debts.map((debt) => (
          <OneCard
            {...debt}
            key={debt.id}
            editDebt={editDebt}
            deleteDebt={deleteDebt}
          />
        ))}
      </div>
    </main>
  );
};

export default DebtsPage;
