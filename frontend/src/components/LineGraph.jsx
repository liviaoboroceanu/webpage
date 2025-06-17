import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const LineGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={150}> {/* Adjust height as needed */}
      <LineChart
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }} // Adjust margins
      >
        <XAxis dataKey="name" hide /> {/* Hide X-axis labels for clean look */}
        <YAxis hide /> {/* Hide Y-axis labels for clean look */}
        <Line type="monotone" dataKey="value1" stroke="#f6e05e" strokeWidth={2} dot={false} /> {/* Yellow line */}
        <Line type="monotone" dataKey="value2" stroke="#a0aec0" strokeWidth={2} dot={false} /> {/* Gray line */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
