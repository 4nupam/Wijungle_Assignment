import React, { useContext, useState } from "react";
import { ContextData } from "../ContextApi/ContextData";
import { CiLight, CiDark } from "react-icons/ci";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import ChartCard from "./ChartCard";
import Card from "./Card";
import Table from "./Table";
import MyLineChart from "./MyLineChart";
import MyPieChart from "./MyPieChart";
import MyBarChart from "./MyBarChart";
import MyDoughnutChart from "./MyDognutChart";

const Main = () => {
  const { data } = useContext(ContextData);
  const [dark, setDark] = useState(false);

  const themeHandler = () => setDark(!dark);

  if (!data.length)
    return <p style={{ textAlign: "center", marginTop: "10px" }}>Loading...</p>;

  const highSev = data.filter((e) => e.alert?.severity >= 3).length;
  const MediumSev = data.filter((e) => e.alert?.severity === 2).length;
  const LowSev = data.filter((e) => e.alert?.severity === 1).length;
  const allowed = data.filter((e) => e.alert?.action === "allowed").length;
  const blocked = data.filter((e) => e.alert?.action === "blocked").length;

  const chartArray = [<MyLineChart />,<MyPieChart />, <MyBarChart />, <MyDoughnutChart />]
  console.log(data[2].alert.rev);
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: dark ? "#080D27" : "#FFFFFF",
        color: dark ? "#FFFFFF" : "#000000",
        transition: "background-color 0.3s ease, color 0.3s ease",
        overflowX:"hidden"
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <span
          style={{
            color: "red",
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: dark ? "white" : "black" }}>
            Network Security Dashboard
          </span>
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
       
          <div
            onClick={themeHandler}
            style={{
              // position: "absolute",
              height: "2.5rem",
              width: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.5rem",
              padding: "2px",
              right: "20px",
              top: "10px",
              border: `4px solid ${dark ? "white" : "black"}`,
              borderRadius: "20px",
            }}
          >
            {dark ? <CiLight /> : <CiDark />}
          </div>
        </div>
      </nav>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "8px",
          width: "100%",
          // padding: "20px",
        }}
      >
        <Card
          dark={dark}
          icon={"⚠️"}
          number={data.length}
          text={"Total Alert"}
        />
        <Card
          dark={dark}
          number={highSev}
          icon={"🟥"}
          text={"High Severity Alerts"}
        />
        <Card
          dark={dark}
          number={MediumSev}
          icon={"🟨"}
          text={"Medium Severity Alerts"}
        />
        <Card
          dark={dark}
          number={LowSev}
          icon={"🟩"}
          text={"Low Severity Alerts"}
        />
        <Card
          dark={dark}
          number={allowed}
          icon={<FaThumbsUp />}
          text={"Allowed"}
        />
        <Card
          dark={dark}
          number={blocked}
          icon={<FaThumbsDown />}
          text={"Blocked"}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <b style={{ fontSize: "2rem", fontFamily: "cursive" }}>TABLE SECTION</b>

        <Table />
      </div>
      <b style={{ fontSize: "2rem", fontFamily: "cursive", margin: "auto",display: "flex", alignItems: "center", justifyContent:"center"}}>
        CHART SECTION
      </b>

      <div
  style={{
    display: 'grid',
    padding:"10px",
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '22px',
    marginTop: '10px',
  }}
>
  {chartArray.map((chart, index) => (
    <ChartCard key={index} chart={chart} />
  ))}
</div>
    </div>
  );
};

export default Main;
