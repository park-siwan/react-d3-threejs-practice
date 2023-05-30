'use client';
import { select } from 'd3';
import React, { useEffect, useRef } from 'react';

const SvgTest = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = select(canvasRef.current);
    const svg = canvas.append('svg').attr('height', 1000).attr('width', 1000);

    svg
      .append('text')
      .attr('x', 200)
      .attr('y', 200)
      .text('hello world')
      .style('font-weight', 'bold')
      .style('font-size', '34px')
      .style('font-family', 'pacifico');

    svg
      .append('rect')
      // .attr('x', 200)
      // .attr('y', 200)
      .attr('width', 200)
      .attr('height', 200)
      .attr('fill', 'hotpink');

    svg
      .append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('r', 50)
      .attr('fill', 'blue');

    svg
      .append('line')
      .attr('x1', 200)
      .attr('y1', 200)
      .attr('x2', 300)
      .attr('y2', 300)
      .attr('stroke', 'red');
  }, []);

  return (
    <div>
      2023-05-30 SVG 학습
      <svg width='500px' height={'500px'}>
        <g>
          <circle cy='50' cx='50' r='30'></circle>
          <circle cy='150' cx='150' r='30'></circle>
          <circle cy='250' cx='250' r='30'></circle>
          {/* <circle cy='350' cx='350' r='30'></circle> */}
          <rect
            x='200'
            y='50'
            width='100'
            height='100'
            style={{ fill: 'chocolate', stroke: 'black', strokeWidth: '50px' }}
          ></rect>
          <rect
            x='300'
            y='50'
            width='100'
            height='100'
            style={{ fill: 'chocolate', stroke: 'black' }}
          ></rect>
          <path
            d='M 100,300 100,350 200,300 200, 350'
            // style={{ fill: 'blank' }}
          ></path>
          <path
            d='M 300,300 300,350 350,350 350,350 , 350, 300'
            // style={{ fill: 'blank' }}
          ></path>
        </g>
        <text x='400' y='400'>
          hello world
        </text>
      </svg>
      <div className='canvas' ref={canvasRef}></div>
    </div>
  );
};

export default SvgTest;
