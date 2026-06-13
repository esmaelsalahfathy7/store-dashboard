import React from "react";
import "./Home.css";
import Card from "../../Components/Card.js";
export default function Home() {
  return (
    <div className={"home"}>
      <div className="header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back. Here's your business summary.</p>
      </div>
      <div className="cards row p-1 row-cols-1 row-cols-sm-2 row-cols-lg-5 mb-3">
        <Card
          card={{
            title: "Total Products",
            value: "1240",
            rate: "+12%",
            duration: "month",
          }}
        >
          <i className="bi bi-archive d-flex justify-content-center align-items-center rounded-circle text-primary bg-opacity-25"></i>
        </Card>
        <Card
          card={{
            title: "Total Sales",
            value: "859",
            rate: "+4.2%",
            duration: "month",
          }}
        >
          <i className="bi bi-cart3  d-flex justify-content-center align-items-center rounded-circle text-primary bg-opacity-25"></i>
        </Card>
        <Card
          card={{
            title: "Revenue",
            value: "$42,500",
            rate: "+8.1%",
            duration: "month",
          }}
        >
          <i
            className="bi bi-cash-stack bg-success  d-flex justify-content-center align-items-center rounded-circle text-success bg-opacity-25"
            style={{ width: "30px", height: "30px" }}
          ></i>
        </Card>
        <Card
          card={{
            title: "Expenses",
            value: "$12,300",
            rate: "-2.1%",
            duration: "month",
          }}
        >
          <i
            className="bi bi-currency-dollar bg-danger d-flex justify-content-center align-items-center rounded-circle text-danger bg-opacity-25"
            style={{ width: "30px", height: "30px" }}
          ></i>
        </Card>
        <Card
          card={{
            title: "Net Profit",
            value: "$30,200",
            rate: "+14.5%",
            duration: "month",
          }}
        >
          <i
            className="bi bi-bank  d-flex justify-content-center align-items-center rounded-circle"
            style={{ width: "30px", height: "30px" }}
          ></i>
        </Card>
      </div>
      <div className="graphs"></div>
    </div>
  );
}
