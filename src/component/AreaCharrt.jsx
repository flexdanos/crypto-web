// AreaChartComponent.js

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
  const formatYAxis = (value) => {
    if (value.toString().includes('.')) {
      return parseFloat(value).toFixed(2);
    } else {
      return value;
    }
  }

  return (
    <>
      <h1 className="ml-1  mb-3 text-[15px] font-bold">Prices</h1>
      <div className="relative">
        <ResponsiveContainer width="100%" height={400} >
          <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#32D583" stopOpacity={0.5} />
                <stop offset="75%" stopColor="#32D583" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Area dataKey="price" stroke="#32D583" fill="url(#color)" />

            <YAxis
              dataKey="price"
              domain={['auto', 'auto']}
              axisLine={false}
              tickLine={true}
              tickCount={8}
              tickFormatter={formatYAxis}
            />
            <XAxis dataKey="hr" />
            <Tooltip />
            <CartesianGrid opacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="absolute -right-[83px] bottom-[60px]">
          <h1 className="text-[15px] -rotate-90 font-bold">24HourChange</h1>
        </div>
      </div>
    </>
  );
};

export default AreaChartComponent;
