import React from "react";

const Card = ({ dark, icon, text, number }) => {
  const cardStyle = {
    height: "auto",
    width: "90%",
    maxWidth: "20rem",
    backgroundColor: dark ? "#080D27" : "#FFFFFF",
    color: dark ? "#FFFFFF" : "#000000",
    border: dark ? "1px solid #2EF2FF" : "1px solid #080D27",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    boxShadow: dark
      ? "0 4px 8px rgba(255, 255, 255, 0.1)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, color 0.3s ease",
    padding: "15px",
    textAlign: "center",
    margin: "10px",
  };

  const iconStyle = { fontSize: "2rem" };
  const textStyle = { fontSize: "1rem", fontWeight: "bold" };
  const numberStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: dark ? "#2EF2FF" : "#080D27",
  };

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <span style={textStyle}>{text}</span>
      <span style={numberStyle}>{number}</span>
    </div>
  );
};

export default Card;
