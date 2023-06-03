'use client';
import { easeLinear, select, selectAll } from 'd3';
import React, { useEffect, useRef, useState } from 'react';
const barWidth = 30;
const BarChart = () => {
  const [data, setData] = useState([100, 10, 30, 50, 10, 70, 200, 90]);
  console.log('data:', data);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const data2 = [110, 50, 20, 30, 50, 90, 120, 70];

    data.forEach((data, index) => {
      svg
        // .enter()
        .append('rect')
        .attr('id', `bar${index}`)
        .attr('height', data)
        .attr('width', barWidth)
        .attr('x', (barWidth + 10) * index)
        .attr('y', 300 - data);
    });
  }, []);
  // useEffect(() => {
  //   const svg = select(svgRef.current);
  //   svg.exit().remove();
  //   // svg.enter();
  //   data.forEach((data, index) => {
  //     svg
  //       // .enter()
  //       .append('rect')
  //       .attr('id', `bar${index}`)
  //       .attr('height', data)
  //       .attr('width', barWidth)
  //       .attr('x', (barWidth + 10) * index)
  //       .attr('y', 300 - data);
  //   });
  // }, [data]);

  return (
    <div>
      BarChart
      <div className='flex'>
        <svg width={350} height={300} ref={svgRef}></svg>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={() => {
            const numbers = [];
            for (var i = 0; i < 8; i++) {
              var randomNumber = Math.floor(Math.random() * 100); // 0부터 99까지의 난수 생성
              numbers.push(randomNumber); // 배열에 숫자 추가
            }
            setData(numbers);
          }}
          className='border-2 rounded-sm px-4 py-1'
        >
          테스트
        </button>
      </div>
    </div>
  );
};

export default BarChart;
