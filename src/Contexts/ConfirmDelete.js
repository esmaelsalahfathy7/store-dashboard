import React, { createContext, useState } from "react";
import "./ConfirmDeleteStyle.css";

const ConfirmDeleteContext = createContext();

export default function ConfirmDeleteProvider() {
  const [animate, setAnimate] = useState(false);

  function handleShowDeleteConfirm(show) {
    if (show) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }

  return (
    <ConfirmDeleteContext value={{ animate, handleShowDeleteConfirm }}>
      <div
        className={`modal fade ${animate ? "show" : ""}`}
        onClick={handleShowDeleteConfirm}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Confirm Delete</h1>
              <button
                type="button"
                className="btn-close"
                onClick={handleShowDeleteConfirm}
              ></button>
            </div>

            <div className="modal-body">Are you sure you want to delete?</div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={handleShowDeleteConfirm}
              >
                Cancel
              </button>

              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </ConfirmDeleteContext>
  );
}
