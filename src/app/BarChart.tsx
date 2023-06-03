'use client';
import { easeLinear, select } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const BarChart = () => {
  const [data, setData] = useState([100, 10, 30, 50, 10, 70, 200, 90]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    const barWidth = 30;
    const data2 = [110, 50, 20, 30, 50, 90, 120, 70];
    data.forEach((data, index) => {
      svg
        .append('rect')
        .attr('id', `bar${index}`)
        .attr('height', data)
        .attr('width', barWidth)
        .attr('x', (barWidth + 10) * index)
        .attr('y', 300 - data)
        .transition()
        .duration(3000)
        .ease(easeLinear)
        .style('fill', 'red')
        .attr('height', data2[index])
        .attr('y', 300 - data2[index]);

      /**텍스트 넣는 방법 */
      // svg
      //   .append('text')
      //   .attr('x', (barWidth + 10) * index)
      //   .attr('y', 300 - data - 10)
      //   .text(data)
      //   .style('font-size', '0.85em')
      //   .style('color', '#222');
    });
    select('#bar0')
      .transition()
      .duration(1000)
      .ease(easeLinear)
      .style('fill', 'blue')
      .delay(3000);
  }, [svgRef, data]);

  return (
    <div>
      BarChart
      <svg width={500} height={500} ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
