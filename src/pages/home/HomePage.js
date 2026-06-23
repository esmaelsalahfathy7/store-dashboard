import React from "react";
import HomeCard from "./Components/HomeCard";
export default function HomePage() {
  return (
    <div className={"home"}>
      <div className="header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back. Here's your business summary.</p>
      </div>
      <div className="cards row p-1 row-cols-1 row-cols-sm-2 row-cols-lg-5 mb-3">
        <HomeCard
          card={{
            title: "Total Products",
            value: "1240",
            rate: "+12%",
            duration: "month",
          }}
        >
          <i className="bi bi-archive d-flex justify-content-center align-items-center rounded-circle text-primary bg-opacity-25"></i>
        </HomeCard>
        <HomeCard
          card={{
            title: "Total Sales",
            value: "859",
            rate: "+4.2%",
            duration: "month",
          }}
        >
          <i className="bi bi-cart3  d-flex justify-content-center align-items-center rounded-circle text-primary bg-opacity-25"></i>
        </HomeCard>
        <HomeCard
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
        </HomeCard>
        <HomeCard
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
        </HomeCard>
        <HomeCard
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
        </HomeCard>
      </div>
      <div className="graphs"></div>
    </div>
  );
}
