import React from "react";

const Header = ({ showForm, setShowForm }) => {
  const appTitle = "Learning List";

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Learning List" />
          <h1>{appTitle}</h1>
        </div>
        <button
          className="btn btn-large btn-open"
          onClick={() => setShowForm((show) => !show)}
        >
          {showForm ? "Close" : "Share a fact"}
        </button>
      </header>
    </>
  );
};

export default Header;
