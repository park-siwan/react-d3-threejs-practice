import React from 'react';

const SvgTest = () => {
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
      <div className='canvas'></div>
    </div>
  );
};

export default SvgTest;
