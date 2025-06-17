import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'Saved', value: 80 }, // Represents 80% saved
  { name: 'Used', value: 20 }, // Represents 20% used
];

const COLORS = ['#f6e05e', '#a0aec0']; // Yellow for saved, gray for used/remaining

const DonutChart = ({ percentage }) => {
  // Adjust data based on the actual percentage provided
  const chartData = [
    { name: 'Saved', value: percentage },
    { name: 'Remaining', value: 100 - percentage },
  ];

  return (
    <ResponsiveContainer width="100%" height={150}> {/* Adjust height as needed */}
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={40} // Inner radius to create the donut hole
          outerRadius={60} // Outer radius
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          startAngle={90} // Start from the top
          endAngle={-270} // Go counter-clockwise for 360 degrees
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={`${percentage}%`}
            position="center"
            fill="#f6e05e" // Yellow color for the percentage text
            style={{ fontSize: '20px', fontWeight: 'bold' }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
