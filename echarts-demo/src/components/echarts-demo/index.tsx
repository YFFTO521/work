import './index.css'
import React, { useEffect, useRef } from 'react'


import * as echarts from 'echarts';

let option = {
  title: {
    text: '小蠢货的生理期'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['生理期开始']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '生理期开始时间',
      type: 'line',
      stack: 'Total',
      data: [8, 4, 6]
    }
  ]
};

const EchartsDemo = (): JSX.Element => {
  const box = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (box.current) {
      echarts.init(box.current).setOption(option);
    }
   
  }, [])

  return (
    <div ref={box} className='echarts-demo-wrapper'></div>
  )
}

export default EchartsDemo;