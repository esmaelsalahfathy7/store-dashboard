import React from "react";

export default function Card({ card, children }) {
  return (
    <div className="col g-3 g-lg-2">
      <div className="card">
        <div className="card-body">
          <div
            className="card-title d-flex justify-content-between align-items-center fw-medium m-0"
            style={{ fontSize: "14px" }}
          >
            {card.title} {children}
          </div>
          <p className="card-text fs-1 fw-bold m-0">{card.value}</p>
          <div className="d-flex gap-2" style={{ fontSize: "14px" }}>
            <span
              className={
                parseInt(card.rate) > 0 ? "text-success" : "text-danger"
              }
            >
              {parseInt(card.rate) > 0 ? (
                <i className="bi bi-arrow-up-short"></i>
              ) : (
                <i className="bi bi-arrow-down-short"></i>
              )}
              {card.rate}
            </span>
            <span className="text-dark">from last {card.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
