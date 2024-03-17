import {useState, useEffect} from "react";
import {removeCharacter , removeFirstSixtyNumbers} from "../functionHelper/index";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import Types
import type {T} from "../type";

//  chart.js settings
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};
const labels = ()  =>{
  const arr =Array.from({ length: 60 }, () => '')
  arr[0] = '0 seconde';
  arr[56] = '60 seconde';
  return arr
};

export const Content = (props : {data : T | undefined}) => {
    const [cpuUsage , setCpuUsage] = useState<number[]>([])
    const [ramUsage , setRamUsage] = useState<number[]>([])

    const data =  props?.data;
  
    const cpuAndramData = {
      labels : labels(),
      datasets: [
        {
          label: 'CPU usage',
          data: cpuUsage,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'RAM usage',
          data: ramUsage,
          borderColor: 'rgb(74 ,155 ,255)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

      ],
    };

    useEffect(() => {
        
        setCpuUsage((d) => {
            return [...d , removeCharacter(data?.CPU_Usage)]
        })
        setRamUsage((d) => {
            return [...d , removeCharacter(data?.RAM_Usage)]
        })
        // for cleaning an array
        if((cpuUsage.length % 60) === 0  && cpuUsage.length !== 0){

            setCpuUsage((d) => removeFirstSixtyNumbers(d));
            setRamUsage((d) => removeFirstSixtyNumbers(d));
        }
        
    } , [data?.CPU_Usage])

    return (
            <div className='bg-black-500 h-[100%]'>
                <h1 className='ml-[10px] text-sky-500 text-2xl font-normal'>Basic Task Management System</h1>
                <Line options={options} data={cpuAndramData} />
              <ul className='flex ml-[10px]'>
                <li className='flex w-[200px] text-[#FF6384] font-bold text-[rgb(255, 99, 132)]'>CPU Usage : <p className='pl-[10px] font-normal'>{data?.CPU_Usage}</p></li> 
                <li className='flex text-[#4A9BFF] font-bold'>RAM Usage : <p className='pl-[10px] font-normal'>{data?.RAM_Usage}</p></li> 
              </ul>
            </div>
    )
}
