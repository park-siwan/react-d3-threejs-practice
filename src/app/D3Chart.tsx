'use client';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { axisBottom, axisRight, scaleBand, scaleLinear, select } from 'd3';

const campaign = [
  {
    date: '5/29',
    people: 100,
    conversionRate: 1,
  },
  {
    date: '5/30',
    people: 20,
    conversionRate: 2,
  },
  {
    date: '5/31',
    people: 30,
    conversionRate: 3,
  },
];
interface Props {
  campaign: {
    date: string;
    people: number;
    conversionRate: number;
  }[];
}
const D3Chart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const dayRatesIndex = campaign.map((_: object, index: number) => index);
    const dates = campaign.map((v) => v.date.substring(5).split('-').join('/'));
    const conversionRates = campaign.map((v) => v.conversionRate);
    const svg: any = select(svgRef.current);

    // scale
    const xScale = scaleBand()
      .domain(dayRatesIndex as Iterable<string>)
      .range([0, 280])
      .padding(0.2);
    const yScale = scaleLinear().domain([0, 50]).range([170, 10]);

    // axis
    const xAxis = axisBottom(xScale)
      .ticks(campaign.length)
      .tickFormat((_, i) => dates[i]);
    svg.select('.x-axis').style('transform', 'translateY(170px)').call(xAxis);

    const yAxis = axisRight(yScale).ticks(7);
    svg.select('.y-axis').style('transform', 'translateX(280px)').call(yAxis);

    svg
      .selectAll('.bar')
      .data(conversionRates)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (_: number, i: string) => xScale(i))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', (value: number) => 170 - yScale(value));
  }, [campaign]);

  return (
    <div>
      <svg ref={svgRef}>
        <g className='x-axis' color='black' />
        <g className='y-axis' color='black' />
      </svg>
    </div>
  );
};

export default D3Chart;
