import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const VerticalBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={150}> {/* Adjust height as needed */}
      <BarChart
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }} // Adjust margins
      >
        <XAxis dataKey="name" hide /> {/* Hide X-axis labels for clean look */}
        <YAxis hide /> {/* Hide Y-axis labels for clean look */}
        {/* Render a single bar for each data point */}
        <Bar dataKey="value" fill="#f6e05e" barSize={10} radius={[5, 5, 0, 0]} /> {/* Yellow bars with rounded top corners */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalBarChart;
