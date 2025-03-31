import React, { useContext } from "react";
import { ContextData } from "../ContextApi/ContextData";

const Table = ({ dark }) => {
  const { data } = useContext(ContextData);

  // Define theme colors
  const bg = dark ? "#080D27" : "#FFF";
  const text = dark ? "#FFF" : "#000";
  const border = dark ? "#555" : "#CCC";
  const headerBg = dark ? "#2A2A2A" : "#2EF2FF";
  const headerText = dark ? "#FFF" : "#080D27";

  const thStyle = {
    padding: "10px",
    textAlign: "center",
    borderBottom: `2px solid ${border}`,
  };

  return (
    <div
      style={{
        maxHeight: "50vh",
        overflowX: "auto",
        width: "100%",
        border: `1px solid ${border}`,
        borderRadius: "8px",
        backgroundColor: bg,
        color: text,
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
      }}
    >
      <table
        style={{
          width: "100%",
          minWidth: "600px",
          borderCollapse: "collapse",
          backgroundColor: bg,
        }}
      >
        <thead
          style={{
            backgroundColor: headerBg,
            color: headerText,
            position: "sticky",
            top: 0,
          }}
        >
          <tr>
            <th style={thStyle}>⏰ Timestamp</th>
            <th style={thStyle}>🌐 Source IP</th>
            <th style={thStyle}>🎯 Destination IP</th>
            <th style={thStyle}>💡 Flow ID</th>
            <th style={thStyle}>📌 Category</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, index) => (
            <tr
              key={index}
              style={{
                borderBottom: `1px solid ${border}`,
                textAlign: "center",
                background:"#000",
                color:"#fff"
              }}
            >
              <td style={{ padding: "8px" }}>{e.timestamp}</td>
              <td style={{ padding: "8px" }}>{e.src_ip}</td>
              <td style={{ padding: "8px" }}>{e.dest_ip}</td>
              <td style={{ padding: "8px" }}>{e.flow_id}</td>
              <td style={{ padding: "8px" }}>{e.alert?.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
