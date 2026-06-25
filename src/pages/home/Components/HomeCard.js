import React from "react";

export default function HomeCard({ card, children }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title text-uppercase d-flex justify-content-between align-items-center m-0">
          {card.title} {children}
        </div>
        <p className="card-text value fs-1 fw-bold m-0">{card.value}</p>
        <div className="rate d-flex gap-2">
          <span
            className={parseInt(card.rate) > 0 ? "text-success" : "text-danger"}
          >
            {parseInt(card.rate) > 0 ? (
              <i className="bi bi-arrow-up-short"></i>
            ) : (
              <i className="bi bi-arrow-down-short"></i>
            )}
            {card.rate}
          </span>
          <span>from last {card.duration}</span>
        </div>
      </div>
    </div>
  );
}
