import React from "react";
import HomeCard from "./Components/HomeCard";
import "./HomePage.css";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
export default function HomePage() {
  const [chartOptions1, setChartOptions1] = useState({
    // Data: Data to be displayed in the chart
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
      { month: "Feb", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "Mar", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Apr", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "May", avgTemp: 14.5, iceCreamSales: 950000 },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: "bar", xKey: "month", yKey: "iceCreamSales" }],
  });
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
      { month: "Jan", iceCreamSales: 162000 },
      { month: "Feb", iceCreamSales: 302000 },
      { month: "Mar", iceCreamSales: 800000 },
      { month: "Apr", iceCreamSales: 1254000 },
      { month: "May", iceCreamSales: 950000 },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: "line", xKey: "month", yKey: "iceCreamSales" }],
  });
  return (
    <div className={"home"}>
      <div className="header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back. Here's your business summary.</p>
      </div>
      <div className="cards row p-0 g-2 mb-0">
        <div className="total-products col-12 col-md-6 col-lg-4 col-xxl">
          <HomeCard
            card={{
              title: "Total Products",
              value: "1240",
              rate: "+12%",
              duration: "month",
            }}
          >
            <i className="bi bi-archive custom-text-primary d-flex justify-content-center align-items-center rounded-circle"></i>
          </HomeCard>
        </div>

        <div className="total-sales col-12 col-md-6 col-lg-4 col-xxl">
          <HomeCard
            card={{
              title: "Total Sales",
              value: "859",
              rate: "+4.2%",
              duration: "month",
            }}
          >
            <i className="bi bi-cart3 custom-text-primary d-flex justify-content-center align-items-center rounded-circle"></i>
          </HomeCard>
        </div>

        <div className="revenue col-12 col-md-6 col-lg-4 col-xxl">
          <HomeCard
            card={{
              title: "Revenue",
              value: "$42,500",
              rate: "+8.1%",
              duration: "month",
            }}
          >
            <i className="bi bi-cash-stack bg-success  d-flex justify-content-center align-items-center rounded-circle text-success bg-opacity-25"></i>
          </HomeCard>
        </div>

        <div className="expenses col-12 col-md-6 col-lg-4 col-xxl">
          <HomeCard
            card={{
              title: "Expenses",
              value: "$12,300",
              rate: "-2.1%",
              duration: "month",
            }}
          >
            <i className="bi bi-currency-dollar bg-danger d-flex justify-content-center align-items-center rounded-circle text-danger bg-opacity-25"></i>
          </HomeCard>
        </div>

        <div className="net-profit col-12 col-md-6 col-lg-4 col-xxl">
          <HomeCard
            card={{
              title: "Net Profit",
              value: "$30,200",
              rate: "+14.5%",
              duration: "month",
            }}
          >
            <i className="bi bi-bank custom-bg-primary text-white d-flex justify-content-center align-items-center rounded-circle"></i>
          </HomeCard>
        </div>
      </div>
      <div className="graphs row g-2 mt-3">
        <div className="col-12 col-md-6">
          <div className="left border rounded-3 p-3 bg-white h-100">
            <h5 className="border-bottom pb-3">Sales Performance</h5>
            <AgCharts options={chartOptions} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="right border rounded-3 p-3 bg-white h-100">
            <h5 className="border-bottom pb-3">Expense Overview</h5>
            <AgCharts options={chartOptions1} />
          </div>
        </div>
      </div>
    </div>
  );
}
