import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Card.scss";

const OneCard = ({ id, name, debt, phone, editDebt, deleteDebt }) => {
  return (
    <Card body className="my-3 card-father">
      <div className="d-flex align-items-center justify-content-between bg-light p-3 rounded-5 debts_section">
        <h4>{name}</h4>
        <p>
          {debt}
          <span className="text-danger d-inline">$</span>
        </p>
        <p>{phone}</p>
        <div className="buttons">
          <button className="btn btn-success" onClick={() => editDebt(id)}>
            Tahrirlash ({id})
          </button>
          <button className="btn btn-danger" onClick={() => deleteDebt(id)}>
            O'chirish
          </button>
        </div>
      </div>
    </Card>
  );
};
OneCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  debt: PropTypes.number,
  phone: PropTypes.string,
};

export default OneCard;
