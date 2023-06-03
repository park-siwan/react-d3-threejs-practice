'use client';
import { select } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const BarChart = () => {
  const [data, setData] = useState([100, 10, 30, 50, 10, 70, 200, 90]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    const barWidth = 30;
    data.forEach((data, index) => {
      svg
        .append('rect')
        .attr('height', data)
        .attr('width', barWidth)
        .attr('x', (barWidth + 10) * index)
        .attr('y', 300 - data)
        .attr('fill', 'red');

      svg
        .append('text')
        .attr('x', (barWidth + 10) * index)
        .attr('y', 300 - data - 10)
        .text(data)
        .style('font-size', '0.85em')
        .style('color', '#222');
    });
    // svg
  }, [svgRef, data]);

  return (
    <div>
      BarChart
      <svg width={500} height={500} ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
