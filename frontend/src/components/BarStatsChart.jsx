import React from 'react';
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis } from 'recharts';

const BarStatsChart = ({ data }) => {
  // Define colors for the segments (gray for background, yellow for filled)
  // Ensure the order matches your data structure if you're layering
  const COLORS = ['#f6e05e', '#a0aec0']; // Yellow, Gray

  return (
    <ResponsiveContainer width="100%" height={150}> {/* Adjust height as needed */}
      <BarChart
        data={data}
        layout="vertical" // Makes it a horizontal bar chart
        barCategoryGap="10%" // Space between bars
      >
        <YAxis
          dataKey="name"
          type="category"
          hide // Hide the Y-axis labels for a cleaner look if not needed
        />
        <XAxis
          dataKey="value"
          type="number"
          hide // Hide the X-axis for a cleaner look
          domain={[0, 100]} // Ensure the axis goes from 0 to 100
        />
        {/* Render two bars for each data point: one for the filled value, one for the remaining */}
        <Bar dataKey="value" fill={COLORS[0]} stackId="a" /> {/* Yellow part */}
        <Bar dataKey="remaining" fill={COLORS[1]} stackId="a" /> {/* Gray part */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarStatsChart;
