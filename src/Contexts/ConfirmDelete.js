import React, { useState, useEffect } from "react";
import "./ConfirmDeleteStyle.css";

const ConfirmDeleteContext = React.createContext();

export default function ConfirmDeleteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [showClass, setShowClass] = useState(false);
  const [functionToExecute, setFunctionToExecute] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleShowDeleteConfirm(functionToExecute) {
    setOpen(true);
    setFunctionToExecute(() => functionToExecute);
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowClass(true), 10);
    } else {
      setShowClass(false);
    }
  }, [open]);

  function handleClose() {
    setOpen(false);
  }
  function handleDelete() {
    // Perform delete action here

    setLoading(true);
    setTimeout(() => {
      if (functionToExecute) {
        functionToExecute();
      }
      setOpen(false);
      setLoading(false);
    }, 3000);
  }
  return (
    <ConfirmDeleteContext.Provider value={{ handleShowDeleteConfirm }}>
      <div
        class={`modal fade  ${showClass ? "show " : ""} ${open ? `d-flex` : ""} `}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div class="modal-body">Are You Sure ?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={handleDelete}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </ConfirmDeleteContext.Provider>
  );
}

export function useConfirmDelete() {
  const context = React.useContext(ConfirmDeleteContext);
  if (!context) {
    throw new Error(
      "useConfirmDelete must be used within a ConfirmDeleteProvider",
    );
  }
  return context;
}
