// MyResponsiveSunburst.js
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import echartsData from './myData';


const MyResponsiveSunburst = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {

    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      
      // Convert Nivo data format to ECharts data format if necessary
      // This step depends on how your current `myData` is structured
     // Assume `data` is already in the correct format for ECharts
      
      const option = {
        title: {
          textStyle: {
            fontSize: 14,
            align: 'center'
          },
          subtextStyle: {
            align: 'center'
          },
          sublink: 'https://getenclave.ai/'
        },
        series: {
          type: 'sunburst',
      
          data: echartsData,
          
          radius: [0, '95%'],
          sort: undefined,
      
          emphasis: {
            focus: 'ancestor'
          },
      
          levels: [
            
            // Second Level: Default with center-aligned horizontal text
            {
            },
          
            // Third Level: From 40% to 70%, text in center pointing towards the center of the circle
            {
              r0: '30%',
              r: '60%',
              label: {
                position: 'inside', // Text inside to ensure it points towards the center
                align: 'center',
                fontSize: 9
                 
              },
              itemStyle: {
                borderWidth: 4 // Assuming you want some border, adjust as needed
              }
            },
          
            // Fourth Level: From 70% to 85%, text outside pointing to center
            {
              r0: '60%',
              r: '75%',
              label: {
                position: 'outside',
                padding: 8, // Add padding for better visual spacing
                silent: false,
                fontSize: 9 // Interactivity on
              },
              itemStyle: {
                borderWidth: 4 // Assuming you want some border, adjust as needed
              }
            },
          
            // Fifth Level: From 85% to 90%, text not visible
            {
              r0: '75%',
              r: '80%',
              label: {
                show: false,
                rotate: 'tangential',
                position: 'inside',
                fontSize: 8 // Hides labels for this level
              },
              itemStyle: {
                borderWidth: 4,
                color: '#da1d23' // Adjust the border width as needed
              
              }
            }
            
          ]
        }
      };
      
      myChart.setOption(option);
      
   

      // Cleanup
      return () => {
        myChart.dispose();
      };
    }
  }, [data]); // Depend on data to reinitialize chart if it changes

  return <div ref={chartRef} style={{ height: '100%', width: '100%' }}></div>;
};

export default MyResponsiveSunburst;
