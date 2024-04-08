import { Bar } from 'react-chartjs-2';
import './style.css'

import {
    useGetBibadKoChetraList
  } from "src/hooks/aadharbhut-bibaran/useBibadKoChetra";

const StackedBarChart = () => {

    const { data: bibadData} = useGetBibadKoChetraList();

    const stackedLabel = bibadData?.map((bibad)=> bibad?.area_of_dispute);

    const dataOption = {

        data: {
            labels: stackedLabel,
            
            datasets:[
                {
                    label: "पूरा भयको ",
                    data: [60,35,46,56,48,53,45,38,50,55],
                    backgroundColor: '#0E9F6E',
                },
                {
                    label: "पूरा नभयको ",
                    data: [30,38,35,30,42,32,25,32,24,33],
                    backgroundColor: '#e1f5ea',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
                x:{
                    stacked: true,
                    grid: {
                        drawOnChartArea: false,
                    }, 
                                   
                },
                y:{
                    beginAtZero: true,
                    stacked: true,
                    border:{
                        dash:  [6, 6],
                    }, 
                    grid:{
                        drawBorder: false, 
                        tickBorderDash: [6, 6],
                    },                  
                },
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },

            plugins:{
                legend:{
                    display: true,
                    align: 'end',
                    labels:{
                        usePointStyle: 'circle',
                    },
                },
                tooltip: {
                    callbacks: {
                      footer: function(tooltipItems){
                        let sum = 0;
      
                        tooltipItems.forEach(function(tooltipItem) {
                        sum += tooltipItem.parsed.y;
                        });
                        return 'जम्मा : ' + sum;
                      }
                    }
                }
            },
           
        },        
    }
    
    return(
        <>

            <div className="p-7 font-open_sans inline-flex h-auto w-full flex-col gap-y-8  bg-white dark:bg-gray-800 designBorder">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-700 text-base font-bold font-['Open Sans'] leading-normal dark:text-gray-300">विवादको क्षेत्र (१०)</p> 
                </div>
                <div className="bg-white dark:bg-gray-800 h-[320px]">

                    <Bar {...dataOption} redraw /> 
                    
                </div>
            </div>
        </>
    )
}

export default StackedBarChart;