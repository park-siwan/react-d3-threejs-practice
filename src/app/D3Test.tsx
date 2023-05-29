'use client';
import React, { useEffect, useRef, useState } from 'react';
import { select } from 'd3';
const D3Test = () => {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);
  const svgRef2 = useRef(null);
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter.append('circle'),
        (update) => update.attr('class', 'updated'),
        (exit) => exit.remove(),
      )
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'red');
    // console.log('svg:', svg);
  }, [data]);

  const handleIncrease = () => {
    setData(data.map((v) => v + 5));
  };
  const handleDecrease = () => {
    setData(data.map((v) => v - 5));
  };
  const handleFilter = () => {
    setData(data.filter((v) => v < 35));
  };
  return (
    <div>
      <h2>D3Test</h2>
      <svg ref={svgRef}></svg>

      <svg ref={svgRef2}>
        {data.map((el, i) => (
          <circle r={el} key={i} stroke={'red'}>
            {el}
          </circle>
        ))}
      </svg>

      <div className='flex-col'>
        <button className='flex w-full' onClick={handleIncrease}>
          + 5
        </button>
        <button className='flex w-full' onClick={handleDecrease}>
          - 5
        </button>
        <button className='flex w-full' onClick={handleFilter}>
          filter circle r should gt 35
        </button>
      </div>
    </div>
  );
};

export default D3Test;
